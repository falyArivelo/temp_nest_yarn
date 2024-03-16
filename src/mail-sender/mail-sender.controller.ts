import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from './mail-sender.service';

@Controller('emails')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(@Body() body: { destinataire: string; sujet: string; templateData: any }): Promise<void> {
    const { destinataire, sujet, templateData } = body;
    await this.emailService.sendEmail(destinataire, sujet, templateData);
  }
}
