import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get('{/:id}')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(getUsersParamDto);
    console.log(limit);
    console.log(page);
    return 'get users request';
  }

  @Post('{/:id}')
  public postUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return 'post users request with body';
  }

  @Patch()
  public patchUsers(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'patch users request with body';
  }
}
