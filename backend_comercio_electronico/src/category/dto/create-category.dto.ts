import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo name es obligatorio' })
  @IsString({ message: 'El campo name debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo name excede los 100 caractares' })
  name: string;

}