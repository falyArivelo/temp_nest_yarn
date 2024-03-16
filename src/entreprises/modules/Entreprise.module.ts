import { Module } from '@nestjs/common';
import { EntreprisesController } from '../controllers/Entreprise.controller';
import { EntreprisesService } from '../services/Entreprise.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Entreprise} from 'src/entities/Entreprise.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Entreprise,])],
  controllers: [EntreprisesController,],
  providers: [EntreprisesService,]
})
export class EntreprisesModule {}
