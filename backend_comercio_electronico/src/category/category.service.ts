import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoryEntity } from '../category/entities/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private repository: Repository<CategoryEntity>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<CategoryEntity> {
    const existingCategory = await this.repository.findOne({
      where: { name: createCategoryDto.name.trim() },
    });
    if (existingCategory) throw new ConflictException(`La categoría ya existe`);

    const category = this.repository.create(createCategoryDto);
    await this.repository.save(category);

    return category;
  }

  async findAll(): Promise<CategoryEntity[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<CategoryEntity> {
    const category = await this.repository.findOne({ where: { id: id } });
    if (!category) throw new NotFoundException(`La categoría ${id} no existe`);
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
    const category = await this.findOne(id);
    const updatedCategory = Object.assign(category, updateCategoryDto);
    return this.repository.save(updatedCategory);
  }

  async delete(id: number): Promise<void> {
    const category = await this.findOne(id);
    await this.repository.delete(id);
  }
}