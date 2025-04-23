import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { OrderEntity } from '../../order/entities/order.entity';

@Entity('order_items')
export class OrderItemEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'product_name' })
  productName: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  total: number;

  @Column({ name: 'order_id' })
  orderId: number;

  @ManyToOne(() => OrderEntity, order => order.items)
  @JoinColumn({ name: 'order_id' })
  order: OrderEntity;
}