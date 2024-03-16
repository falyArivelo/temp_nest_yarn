import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateDechetDto } from 'src/dechets/dtos/CreateDechet.dto';
import { UpdateDechetDto } from 'src/dechets/dtos/UpdateDechet.dto';
import { DechetsService } from 'src/dechets/services/Dechet.service';

@Controller('dechets')
export class DechetsController {
    constructor(private dechetsService: DechetsService) { }

    @Get()
    getDechets() {
        return this.dechetsService.findDechets();
    }

    @Get(':id')
    getDechet(@Param('id') id: number) {
        return this.dechetsService.findDechetById(id);
    }

    @Post()
    createDechet(@Body() createDechetDto: CreateDechetDto) {
        //this.dechetsService.createDechet(createDechetDto);
        try {
            const message = this.dechetsService.createDechet(createDechetDto);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.message || 'Une erreur est survenue lors de la création de la Dechet' };
        }
    }

    @Put(':id')
    async updateDechet(@Param('id') id: number, @Body() updateDechetDto: UpdateDechetDto) {
       // await this.dechetsService.updateDechet(id, updateDechetDto)
        try {
            const message = await this.dechetsService.updateDechet(id, updateDechetDto);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.message };
        }
    
    }

    @Delete(':id')
    async deleteDechetById(@Param('id', ParseIntPipe) id: number) {
        //await this.dechetsService.deleteDechetById(id);
        try {
            const message = await this.dechetsService.deleteDechetById(id);
            return { success: true, message };

        } catch (error) {
            return { success: false, message: error.message};
        }
    }
}
