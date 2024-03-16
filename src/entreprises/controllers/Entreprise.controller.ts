import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Query, Req } from '@nestjs/common';
import { CreateEntrepriseDto } from 'src/entreprises/dtos/CreateEntreprise.dto';
import { UpdateEntrepriseDto } from 'src/entreprises/dtos/UpdateEntreprise.dto';
import { EntreprisesService } from 'src/entreprises/services/Entreprise.service';

@Controller('entreprises')
export class EntreprisesController {
    constructor(private entreprisesService: EntreprisesService) { }

    // @Get()
    // findAllPaginated(@Body() { page, limit }: any) {
    //     return this.entreprisesService.findAllPaginated(page, limit);
    // }


    @Get()
    async getEntreprises(@Query() { page }: any) {
        console.log(page)
        const limit = 10;
        const total = await this.entreprisesService.countAll();
        const pages = Math.ceil(total / limit);

        const entreprises = await this.entreprisesService.findAllPaginated(page, limit);
        return { data: entreprises, total: total, pages: pages };

    }

    @Get(':id')
    getEntreprise(@Param('id') id: number) {
        return this.entreprisesService.findEntrepriseById(id);
    }

    @Post()
    async createEntreprise(@Body() createEntrepriseDto: CreateEntrepriseDto) {
        //this.entreprisesService.createEntreprise(createEntrepriseDto);
        try {
            const message = await this.entreprisesService.createEntreprise(createEntrepriseDto);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.message || 'Une erreur est survenue lors de la création de la Entreprise' };
        }
    }

    @Put(':id')
    async updateEntreprise(@Param('id') id: number, @Body() updateEntrepriseDto: UpdateEntrepriseDto) {
        // await this.entreprisesService.updateEntreprise(id, updateEntrepriseDto)
        try {
            const message = await this.entreprisesService.updateEntreprise(id, updateEntrepriseDto);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.message };
        }

    }

    @Delete(':id')
    async deleteEntrepriseById(@Param('id', ParseIntPipe) id: number) {
        //await this.entreprisesService.deleteEntrepriseById(id);
        try {
            const message = await this.entreprisesService.deleteEntrepriseById(id);
            return { success: true, message };


        } catch (error) {
            return { success: false, message: error.message };
        }
    }

}
