import {Module} from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';
import {TypeOrmModule} from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import {UserController} from './controllers/users.controller';
import {UserService} from './services/users.services'
import {User} from './users.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User]), forwardRef(()=> AuthModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
