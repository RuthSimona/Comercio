import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  IsDate,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo name es obligatorio' })
  @IsString({ message: 'El campo name debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo name excede los 100 caractares' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo lastName es obligatorio' })
  @IsString({ message: 'El campo lastName debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo lastName excede los 100 caractares' })
  lastName: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo email es obligatorio' })
  @IsEmail({}, { message: 'El campo email debe ser un email válido' })
  @MaxLength(100, { message: 'El campo email excede los 100 caractares' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo password es obligatorio' })
  @IsString({ message: 'El campo password debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo password excede los 100 caractares' })
  password: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo state es obligatorio' })
  state: boolean;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo type es obligatorio' })
  type: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo phone es obligatorio' })
  phone: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo address es obligatorio' })
  @IsString({ message: 'El campo address debe ser tipo cadena' })
  @MaxLength(100, { message: 'El campo address excede los 100 caractares' })
  address: string;

  @ApiProperty({ example: '2024-06-01' })
  @IsNotEmpty({ message: 'El campo fecha_estreno no debe ser vacío' })
  dateOfBirth: Date;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo profilePicture es obligatorio' })
  pathAvatar: string;
}