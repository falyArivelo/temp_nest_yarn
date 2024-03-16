import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Profile } from 'src/entities/Profile.entity';
import { Entreprise } from 'src/entities/Entreprise.entity';
import { ProfilesController } from './controllers/profiles/profiles.controller';
import { ProfilesService } from './services/profiles/profiles.service';

@Module({
  imports:[TypeOrmModule.forFeature([User,Profile,Entreprise])],
  controllers: [UsersController, ProfilesController],
  providers: [UsersService, ProfilesService]
})
export class UsersModule {}
