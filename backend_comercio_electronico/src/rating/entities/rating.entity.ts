import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductEntity } from '../../product/entities/product.entity';
import { UserEntity } from '../../users/entities/user.entity'; 

@Entity('ratings')
export class RatingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  score: number;

  @Column({ nullable: true })
  comment: string;

  @Column()
  createdAt: Date;
  

  @ManyToOne(() => ProductEntity, (product) => product.ratings)
  @JoinColumn ({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => UserEntity, (user) => user.ratings)
  @JoinColumn ({ name: 'user_id' })
  user: UserEntity;
}