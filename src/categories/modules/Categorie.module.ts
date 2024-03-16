import { Module } from '@nestjs/common';
import { CategoriesController } from '../controllers/Categorie.controller';
import { CategoriesService } from '../services/Categorie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Categorie} from 'src/entities/Categorie.entity';
@Module({
  imports:[TypeOrmModule.forFeature([Categorie,])],
  controllers: [CategoriesController,],
  providers: [CategoriesService,]
})
export class CategoriesModule {}
