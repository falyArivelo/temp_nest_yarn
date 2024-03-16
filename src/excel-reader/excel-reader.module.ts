import { Module } from '@nestjs/common';
import { ExcelReaderService } from './excel-reader.service';
import { ExcelReaderController } from './excel-reader.controller';

@Module({
  providers: [ExcelReaderService],
  controllers: [ExcelReaderController]
})
export class ExcelReaderModule {}
