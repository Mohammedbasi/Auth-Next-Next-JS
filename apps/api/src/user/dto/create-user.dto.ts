import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 15, {
    message: 'Password must be at least 8 and at most 15 character',
  })
  password: string;
}
