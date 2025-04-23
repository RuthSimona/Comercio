import { Module } from '@nestjs/common';
import { OrderItemService } from './oreder-item.service';
import { OrderItemController } from './oreder-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemEntity } from './entities/oreder-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderItemEntity])],
  controllers: [OrderItemController],
  providers: [OrderItemService],
})
export class OrederItemModule {}
