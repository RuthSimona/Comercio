import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from '../product/entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private repository: Repository<ProductEntity>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<ProductEntity> {
    const existingProduct = await this.repository.findOne({
      where: { name: createProductDto.name.trim() },
    });
    if (existingProduct) throw new ConflictException(`El producto ya existe`);

    const product = this.repository.create(createProductDto);
    await this.repository.save(product);

    return product;
  }

  async findAll(): Promise<ProductEntity[]> {
    const products = await this.repository
      .createQueryBuilder('product')
      .leftJoinAndSelect('product.category', 'category')
      .select([
        'product.id',
        'product.name',
        'product.description',
        'product.price',
        'product.state',
        'product.stock',
      ])
      .addSelect(['category.name'])
      .getMany();
    return products;
  }

  async findOne(id: number): Promise<ProductEntity[]> {
    const product = await this.repository.findOne({ where: { id: id } });
    if (!product) throw new NotFoundException(`El producto ${id} no existe`);
    return this.repository.find({ relations: ['category'], where: { id: id } });
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<ProductEntity> {
    const product = await this.repository.findOne({ where: { id: id } });
    if (!product) throw new NotFoundException(`El usuario ${id} no existe`);

    const updatedProduct = Object.assign(product, updateProductDto);
    return this.repository.save(updatedProduct);
  }

  async delete(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.repository.delete(id);
  }
}
