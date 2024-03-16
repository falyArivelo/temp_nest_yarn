import { Module } from '@nestjs/common';
import { AnnoncesController } from './controllers/annonces/annonces.controller';
import { AnnoncesService } from './services/annonces/annonces.service';

@Module({
  controllers: [AnnoncesController],
  providers: [AnnoncesService]
})
export class AnnoncesModule {}
