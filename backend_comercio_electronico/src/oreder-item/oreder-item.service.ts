import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderItemDto } from './dto/create-oreder-item.dto';
import { UpdateOrederItemDto } from './dto/update-oreder-item.dto';
import { OrderItemEntity } from '../oreder-item/entities/oreder-item.entity';

@Injectable()
export class OrderItemService {
  constructor(
    @InjectRepository(OrderItemEntity)
    private repository: Repository<OrderItemEntity>,
  ) {}

  async create(createOrderItemDto: CreateOrderItemDto): Promise<OrderItemEntity> {
    const orderItem = this.repository.create(createOrderItemDto);
    await this.repository.save(orderItem);

    return orderItem;
  }

  async findAll(): Promise<OrderItemEntity[]> {
    // Assuming order items don't have a direct category relation
    return this.repository.find();
  }

  async findOne(id: number): Promise<OrderItemEntity> {
    const orderItem = await this.repository.findOne({ where: { id: id } });
    if (!orderItem) throw new NotFoundException(`El item de orden ${id} no existe`);
    return orderItem;
  }

  async update(id: number, updateOrderItemDto: UpdateOrederItemDto): Promise<OrderItemEntity> {
    const orderItem = await this.repository.findOne({ where: { id: id } });
    if (!orderItem) throw new NotFoundException(`El item de orden ${id} no existe`);

    const updatedOrderItem = Object.assign(orderItem, updateOrderItemDto);
    return this.repository.save(updatedOrderItem);
  }

  async delete(id: number): Promise<void> {
    const orderItem = await this.findOne(id);
    await this.repository.delete(id);
  }
}