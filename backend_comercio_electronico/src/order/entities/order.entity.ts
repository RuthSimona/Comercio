import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, BeforeInsert } from 'typeorm';
import { OrderItemEntity } from '../../oreder-item/entities/oreder-item.entity';
import { UserEntity } from '../../users/entities/user.entity';
import { randomUUID } from 'crypto';

@Entity('orders')
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, name: 'order_code' })
  orderCode: string;

  @Column({ default: false, name: 'status' })
  status: boolean;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => UserEntity, user => user.orders)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
  
  @OneToMany(() => OrderItemEntity, orderItem => orderItem.order)
  items: OrderItemEntity[];

  @BeforeInsert()
  generateUuid() {
    this.orderCode = randomUUID(); 
    
  }
}