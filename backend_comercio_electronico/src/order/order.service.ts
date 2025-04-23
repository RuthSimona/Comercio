import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderWithItemsDto  } from './dto/create-oreder-item.dto';
import { OrderItemEntity } from '../oreder-item/entities/oreder-item.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    @InjectRepository(OrderItemEntity)
    private readonly orderItemRepository: Repository<OrderItemEntity>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const order = this.orderRepository.create(createOrderDto);
    await this.orderRepository.save(order);
    return order;
  }

  async createOrderWithItems(createOrderWithItemsDto: CreateOrderWithItemsDto): Promise<OrderEntity> {
    const { items, userId } = createOrderWithItemsDto;
    const order = this.orderRepository.create({ userId });
    const savedOrder = await this.orderRepository.save(order);

    const orderItems = items.map(item => ({
      ...item,
      orderId: savedOrder.id,
    }));

    await this.orderItemRepository.save(orderItems);

    return savedOrder;
  }

  async createOrder(createOrderDto: CreateOrderDto): Promise<OrderEntity> {
    const order = this.orderRepository.create(createOrderDto);
    await this.orderRepository.save(order);
    return order;
  }


  async createOrderAndOrderItem(
    createOrderDto: CreateOrderDto,
    createOrderItemDto: CreateOrderWithItemsDto,
  ): Promise<OrderEntity> {
    const order = await this.orderRepository.create(createOrderDto);
    await this.orderRepository.save(order);
    const orderId = order.id;
    const orderItem = this.orderItemRepository.create({
      ...createOrderItemDto,
      orderId: orderId,
    });

    await this.orderItemRepository.save(orderItem);

    return order;
  }

  async findAll(): Promise<OrderEntity[]> {
    return this.orderRepository.find({
      relations: ['items', 'user'],
      select: {
        user: {
          name: true,
          lastName: true,
          email: true,
          state: true,
          type: true,
          phone: true,
          address: true,
          dateOfBirth: true,
          pathAvatar: true,
        },
        items: {
          productName: true,
          quantity: true,
          price: true,
          total: true,
        }
      },
    });
  }

  async findOne(id: number): Promise<OrderEntity[]> {
    const order = await this.orderRepository.findOne({ where: { id: id } });
    if (!order) throw new NotFoundException(`El producto ${id} no existe`);
    return this.orderRepository.find({
      relations: ['category'],
      where: { id: id },
    });
  }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<OrderEntity[]> {
    const order = await this.findOne(id);
    const updated = Object.assign(order, updateOrderDto);
    return this.orderRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const result = await this.orderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Order with ID "${id}" not found`);
    }
  }
}
