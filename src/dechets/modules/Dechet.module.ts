import { Module } from '@nestjs/common';
import { DechetsController } from '../controllers/Dechet.controller';
import { DechetsService } from '../services/Dechet.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Dechet} from 'src/entities/Dechet.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Dechet,])],
  controllers: [DechetsController,],
  providers: [DechetsService,]
})
export class DechetsModule {}
