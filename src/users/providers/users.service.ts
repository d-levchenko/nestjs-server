import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { PatchUserDto } from '../dtos/patch-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  public findAllUsers(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log('isAuth: ', isAuth);

    return [
      {
        username: 'John Doe',
        email: 'q8Nt9@example.com',
      },
      {
        username: 'Alice Doe',
        email: 'w8Nt9@example.com',
      },
    ];
  }

  public findUserById(id: string) {
    return {
      id,
      username: 'John Doe',
      email: 'q8Nt9@example.com',
    };
  }

  public async createUser(createUserDto: CreateUserDto) {
    const existingUser = await this.usersRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });

    if (existingUser) {
      throw new Error('User already exists');
    }

    const user = this.usersRepository.create(createUserDto);
    return this.usersRepository.save(user);
  }

  public updateUser(patchUserDto: PatchUserDto) {
    return {
      username: 'John Doe',
      email: 'q8Nt9@example.com',
    };
  }
}
