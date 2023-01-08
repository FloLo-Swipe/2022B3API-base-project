import { IsNotEmpty, IsEmail, IsIn, IsOptional, MinLength } from "class-validator";

export class CreateUserDto {
@IsNotEmpty()
@MinLength(3)
username!: string;
@IsNotEmpty()
@MinLength(8)
password!: string;
@IsNotEmpty()
@IsEmail()
email!: string;
@IsOptional()
@IsIn(['Employee', 'Admin', 'ProjectManager'])
role?: 'Employee' | 'Admin' | 'ProjectManager';
}

export class LoginUserDto{
  @IsNotEmpty()
  @IsEmail()
  email!: string;
  @IsNotEmpty()
  @MinLength(8)
  password!: string;
}
