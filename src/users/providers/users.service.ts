import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { CreateUserDto } from '../dtos/create-user.dto';
import { PatchUserDto } from '../dtos/patch-user.dto';

@Injectable()
export class UsersService {
  public findAllUsers(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
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

  public findUserById(id: number) {
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
