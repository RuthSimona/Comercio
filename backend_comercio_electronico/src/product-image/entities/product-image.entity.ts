import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ProductEntity } from '../../product/entities/product.entity';

@Entity('product_images')
export class ProductImageEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'image_path' })
  imagePath: string;

  @ManyToOne(() => ProductEntity, product => product.images)
  @JoinColumn({ name: 'category_id' })
  product: ProductEntity;
}