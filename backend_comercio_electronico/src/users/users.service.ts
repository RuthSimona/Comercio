import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const existingUser = await this.repository.findOne({
      where: { email: createUserDto.email.trim() },
    });
    if (existingUser) throw new ConflictException(`El usuario ya existe`);

    const user = new UserEntity();
    user.name = createUserDto.name.trim();
    user.lastName = createUserDto.lastName.trim();
    user.email = createUserDto.email.trim();
    user.password = createUserDto.password.trim();
    user.state = true;
    user.type = 1;
    user.phone = createUserDto.phone.trim();
    user.address = createUserDto.address.trim();
    user.dateOfBirth = createUserDto.dateOfBirth;
    user.pathAvatar = createUserDto.pathAvatar.trim();
    
    await this.repository.save(user);

    delete user.password;

    return user;

  }

  async findOneByUsername(name: string): Promise<UserEntity> {
    return this.repository.findOne({ where: { name } });
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    return this.repository.findOne({ where: { email } });
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await this.repository
      .createQueryBuilder('user')
      .select([
        'user.id',  
        'user.name',
        'user.lastName',
        'user.email',
        'user.state',
        'user.type',
        'user.phone',
        'user.address',
        'user.dateOfBirth',
        'user.pathAvatar',
      ])
      .getMany();
    return users;
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.repository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(`El usuario ${id} no existe`);
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.repository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(`El usuario ${id} no existe`);

    const updatedUser = Object.assign(user, updateUserDto);
    return this.repository.save(updatedUser);
  }

  async delete(id: number): Promise<void> {
    const user = await this.repository.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException(`El usuario ${id} no existe`);
    await this.repository.delete(id);
  }

  async validate(email: string, password: string): Promise<UserEntity> {
    const usuarioOk = await this.repository.findOne({
      where: { email: email.trim() },
    });
    if (!usuarioOk) throw new UnauthorizedException(`Usuario inválido`);

    if (!(await usuarioOk.validatePassword(password)))
      throw new UnauthorizedException(`Usuario inválido`);
    
    delete usuarioOk.password;

    return usuarioOk;
  }
}
