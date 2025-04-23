import { PartialType } from '@nestjs/swagger';
import { CreateOrderItemDto } from './create-oreder-item.dto';

export class UpdateOrederItemDto extends PartialType(CreateOrderItemDto) {}
