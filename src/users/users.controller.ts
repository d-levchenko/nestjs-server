import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get('{/id}/')
  public getUsers(@Param('id') id: string) {
    if (id) {
      return 'get user request with id: ' + id;
    }
    return 'get users request';
  }

  @Post('{/id}/')
  public postUsers(
    @Body() request: { username: string; email: string; password: string },
  ) {
    console.log(request);
    return 'post users request with body';
  }
}
