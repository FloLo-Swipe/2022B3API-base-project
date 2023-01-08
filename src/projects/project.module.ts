import {Module} from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import {ProjectController} from './project.controller';
import {Project} from './project.entity'
import { ProjectService } from './project.services';

@Module({
  imports: [TypeOrmModule.forFeature([Project]), forwardRef(()=> AuthModule)],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService]
})
export class ProjectModule {}
