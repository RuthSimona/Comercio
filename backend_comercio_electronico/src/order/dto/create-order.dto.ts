import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {


  @ApiProperty()
  @IsNumber({}, { message: 'El campo userId debe ser un número' })
  userId: number;

}