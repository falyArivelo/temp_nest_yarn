import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { multerOptions } from './multer.config';

  
@Controller('files')
export class UploaderController {
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async uploadFile(@UploadedFile() file) {
      console.log(file);
    }

}

