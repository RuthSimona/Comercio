import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo productName es obligatorio' })
  @IsString({ message: 'El campo productName debe ser una cadena de texto' })
  @MaxLength(255, { message: 'El campo productName no debe exceder los 255 caracteres' })
  productName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo quantity es obligatorio' })
  @IsNumber({}, { message: 'El campo quantity debe ser un número' })
  @Min(1, { message: 'El campo quantity debe ser al menos 1' })
  quantity: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo price es obligatorio' })
  @IsNumber({}, { message: 'El campo price debe ser un número' })
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo total es obligatorio' })
  @IsNumber({}, { message: 'El campo total debe ser un número' })
  total: number;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo orderId es obligatorio' })
    @IsNumber({}, { message: 'El campo orderId debe ser un número' })
    orderId: number;

}