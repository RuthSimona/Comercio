import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { CategoryEntity } from '../../category/entities/category.entity';
import { ProductImageEntity } from '../../product-image/entities/product-image.entity';
import { RatingEntity } from '../../rating/entities/rating.entity'; // Asegúrate de que la ruta sea correcta

@Entity('products')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'boolean' })
  state: boolean;

  @Column({ type: 'int' })
  stock: number;

  @Column()
  description: string;

  @Column({ type: 'decimal' })
  price: number;

  @Column({ name: 'category_id'})
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToMany(() => ProductImageEntity, image => image.product)
  images: ProductImageEntity[];

  @OneToMany(() => RatingEntity, rating => rating.product)
  ratings: RatingEntity[];
}
