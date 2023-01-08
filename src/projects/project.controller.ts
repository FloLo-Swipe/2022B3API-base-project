import { Body, Controller, Post, UseGuards, UsePipes, Request, ValidationPipe} from '@nestjs/common';
import e from 'express';
import { AuthService } from '../auth/auth.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ProjectInfo } from './project.dtos';
import { ProjectService } from './project.services';


@Controller('projects')
export class ProjectController {
  constructor(private projectService: ProjectService,
    private authService : AuthService){}
    
    @UseGuards(JwtAuthGuard)
    @Post('')
    @UsePipes(ValidationPipe)
    async createProject (@Body() projectInfo : ProjectInfo, @Request() req){
      console.log(req.user)
      return this.projectService.testRole(req);
    }
  }
