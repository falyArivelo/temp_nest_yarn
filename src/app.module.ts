import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AnnoncesModule } from './annonces/annonces.module';
import { CategoriesModule } from './categories/modules/Categorie.module';
import { DechetsModule } from './dechets/modules/Dechet.module';
import { AuthModule } from './auth/auth.module';
import { EntreprisesModule } from './entreprises/modules/Entreprise.module';
import { ExcelReaderModule } from './excel-reader/excel-reader.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploaderModule } from './uploader/uploader.module';
import { CentreController } from './centre/centre.controller';
import { CentreService } from './centre/centre.service';
import { CentreModule } from './centre/centre.module';
import { EmailModule } from './mail-sender/mail-sender.module';

// ajout imports
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Le type de votre base de données (postgres pour PostgreSQL)
      host: 'localhost', // L'adresse de votre base de données
      port: 5432, // Le port de votre base de données PostgreSQL par défaut est 5432
      username: 'postgres', // Le nom d'utilisateur de votre base de données
      password: 'root', // Le mot de passe de votre base de données
      database: 'ecosci', // Le nom de votre base de données
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Mettez à true pour synchroniser automatiquement les entités avec la base de données (utile pour le développement)
    }),
    MulterModule.register({
      dest: './uploads', // Répertoire de destination pour enregistrer les fichiers téléchargés
    }),
    UsersModule,
    AnnoncesModule,
    CategoriesModule,
    DechetsModule,
    AuthModule,
    EntreprisesModule,
    ExcelReaderModule,
    UploaderModule,
    UploaderModule,
    CentreModule,
    EmailModule
    // a ajouter
  ],
  controllers: [AppController, CentreController,],
  providers: [AppService, CentreService,],
})
export class AppModule { }
