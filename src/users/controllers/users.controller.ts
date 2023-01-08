import { Controller, Post, Body, UsePipes, ValidationPipe, UseGuards, Request, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { CreateUserDto, LoginUserDto } from '../dto/create-users.dto';
import { UserService } from '../services/users.services';
import { User } from '../users.entity';
import { LocalAuthGuard } from '../../auth/local-auth.guard';
import { AuthService } from '../../auth/auth.service';
import { Req } from '@nestjs/common/decorators';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private userService: UserService,
    private authService : AuthService){}
  
    @Post('auth/sign-up')
    @UsePipes(ValidationPipe)
    signUp(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUser(createUserDto);
    }
  
    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    @UsePipes(ValidationPipe)
    async login(@Body() body: LoginUserDto, @Request() req) {
      return this.authService.login(req.user);
    }
    
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    @Get('me')
    getMe(@Req() req) {
    return req.user
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    @UsePipes(ValidationPipe)  
    findOne(@Param('id', new ParseUUIDPipe()) id) {
    return this.userService.findId(id);
    }
    
    @UseGuards(JwtAuthGuard)
    @UsePipes(ValidationPipe)
    @Get('/')
    findAll()  {
      return this.userService.findAll();
    }
    
  }



