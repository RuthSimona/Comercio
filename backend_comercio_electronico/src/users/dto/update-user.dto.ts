import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly name?: string;
  readonly lastName?: string;
  readonly email?: string;
  readonly password?: string;
  readonly state?: boolean;
  readonly type?: number;
  readonly phone?: string;
  readonly address?: string;
  readonly dateOfBirth?: Date;
  readonly pathAvatar?: string;
}
