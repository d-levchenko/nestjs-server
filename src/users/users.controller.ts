import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor() {}

  @Get('{/:id}')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log(id, limit, page);
    return 'get users request';
  }

  @Post('{/:id}')
  public postUsers(
    @Body() request: { username: string; email: string; password: string },
  ) {
    console.log(request);
    return 'post users request with body';
  }
}
