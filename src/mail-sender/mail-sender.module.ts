import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { EmailService } from './mail-sender.service';
import { EmailController } from './mail-sender.controller';

@Module({
  providers: [ EmailService],
  controllers: [EmailController],
})
@Module({})
export class EmailModule {}
