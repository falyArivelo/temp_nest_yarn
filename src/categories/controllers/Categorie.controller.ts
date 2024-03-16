import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateCategorieDto } from 'src/categories/dtos/CreateCategorie.dto';
import { UpdateCategorieDto } from 'src/categories/dtos/UpdateCategorie.dto';
import { CategoriesService } from 'src/categories/services/Categorie.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) { }

    @Get()
    @UseGuards(JwtAuthGuard)
    getCategories() {
        return this.categoriesService.findCategories();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard)
    getCategorie(@Param('id') id: number) {
        return this.categoriesService.findCategorieById(id);
    }

    @Post()
    @UseGuards(JwtAuthGuard)
    async createCategorie(@Body() createCategorieDto: CreateCategorieDto) {
        try {
            const message = await this.categoriesService.createCategorie(createCategorieDto);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.message || 'Une erreur est survenue lors de la création de la catégorie' };
        }
    }

    @Put(':id')
    @UseGuards(JwtAuthGuard)
    async updateCategorie(@Param('id') id: number, @Body() updateCategorieDto: UpdateCategorieDto) {
        // await this.categoriesService.updateCategorie(id, updateCategorieDto)
        try {
            const message = await this.categoriesService.updateCategorie(id, updateCategorieDto);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.message };
        }

    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard)
    async deleteCategorieById(@Param('id', ParseIntPipe) id: number) {
        try {
            const message = await this.categoriesService.deleteCategorieById(id);
            return { success: true, message };
        } catch (error) {
            return { success: false, message: error.message };
        }
        
    }
}
