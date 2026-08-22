import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
  Matches,
  MinLength,
} from 'class-validator';

/* eslint-disable @typescript-eslint/no-unsafe-call */

export class CreateUserDto {
  @IsString()
  @IsOptional()
  @Length(3, 100)
  username?: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      'Password must be at least 8 characters long and contain at least one letter, one number, and one special character',
  })
  password: string;
}
