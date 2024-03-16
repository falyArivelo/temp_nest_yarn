import { Controller, Post, Get, UploadedFile, UseInterceptors, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ExcelReaderService } from './excel-reader.service';

@Controller('excel')
export class ExcelReaderController {
    constructor(private readonly excelService: ExcelReaderService) { }

    // @Get()
    // async get() {
    //     return 'lol';
    // }

    @Get()
    async lireFichierExcel() {
      try {
        // Encode le chemin du fichier pour l'utiliser dans l'URL
        // const encodedChemin = encodeURIComponent(cheminFichier);
        const result = await this.excelService.lireFichierExcel('B:/PROJECTS/NESTJS/ecosci/test.xlsx');
        return { success: true, data: result };
      } catch (error) {
        return { success: false, message: error.message || 'Erreur lors de la lecture du fichier Excel' };
      }
    }

    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file'))
    // async uploadFile(@UploadedFile() file: Express.Multer.File) {
    //     const data = await this.excelService.readExcel('B:/PROJECTS/NESTJS/ecosci/test.xlsx');
    //     // console.log(file.path)
    //     return { data };
    // }
}

