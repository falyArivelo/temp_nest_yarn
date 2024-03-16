import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import { dirname } from 'path';

@Injectable()
export class EmailService {
  private transporter : any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'arivelofaly@gmail.com',
        pass: 'qfxukowgvjweyqmm',
      },
    });
  }

  async sendEmail(destinataire: string, sujet: string, templateData: any): Promise<void> {
    const template = fs.readFileSync(__dirname + '/types/email-template.hbs', 'utf8');
    console.log(__dirname)
    const compiledTemplate = handlebars.compile(template);
    const html = compiledTemplate(templateData);


    const mailOptions = {
      from: 'arivelofaly@gmail.com',
      to: destinataire,
      subject: sujet,
      html: html,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
