import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-users.dto';
import { User } from '../users.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) 
    private usersRepository: Repository<User>,){}   

  createUser(body: CreateUserDto): Promise<User> {
    const newUser = this.usersRepository.create(body)
    return this.usersRepository.save(newUser)
  }

  async findOne(email: string): Promise<User | null> {
    return this.usersRepository.findOneBy({
        email: email,
    });
  }

  async findId(id: string): Promise<User | null>{
    const user = await this.usersRepository.findOneBy({
      id: id
    })
    if(user===null){
      throw new NotFoundException();
    } else {
      console.log(user);
    return user;
    }
  }
  
  findAll(): Promise<User[]>{
    return this.usersRepository.find();
  }
}

