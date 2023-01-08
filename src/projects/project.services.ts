import { Injectable } from '@nestjs/common';
import { NotFoundException, UnauthorizedException } from '@nestjs/common/exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserService } from '../users/services/users.services';
import { Project } from './project.entity';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project) 
    private projectRepository: Repository<Project>,
    private userService : UserService
    ){}

    async testRole(req : any) {
      if(req.user.role=="Admin"){
        const user = await this.userService.findId(req.body.referringEmployeeId)
        if(user.role == 'Admin' || user.role == 'ProjectManager'){
          return this.projectRepository.save(this.projectRepository.create({
            name: req.body.name,
            referringEmployeeId: req.body.referringEmployeeId
          }))
        } else {
          throw new UnauthorizedException();
        }
      }
      else{
        throw new UnauthorizedException();
      }
    }
}

