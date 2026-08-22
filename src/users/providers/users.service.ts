import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { PatchUserDto } from '../dtos/patch-user.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
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

  public createUser(createUserDto: CreateUserDto) {
    return {
      username: 'John Doe',
      email: 'q8Nt9@example.com',
    };
  }

  public updateUser(patchUserDto: PatchUserDto) {
    return {
      username: 'John Doe',
      email: 'q8Nt9@example.com',
    };
  }
}
