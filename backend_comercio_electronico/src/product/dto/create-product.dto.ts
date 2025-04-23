import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsNumber, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo name es obligatorio' })
  @IsString({ message: 'El campo name debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo name excede los 100 caractares' })
  name: string;
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo state es obligatorio' })
  state: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo state es obligatorio' })
  stock: number;

  @ApiProperty()
  @MaxLength(100, { message: 'El campo name excede los 100 caractares' })
  @IsNotEmpty({ message: 'El campo state es obligatorio' })
  description: string;

  @ApiProperty()
  @IsNumber({}, { message: 'El campo price debe ser tipo número' })
  price: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo state es obligatorio' })
  categoryId: number;
}