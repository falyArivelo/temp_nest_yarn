import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from 'src/entities/Categorie.entity';
import { CreateCategorieDto } from 'src/categories/dtos/CreateCategorie.dto';
import { UpdateCategorieDto } from 'src/categories/dtos/UpdateCategorie.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categorie) private categoriesRepository: Repository<Categorie>,
  ) { }

  findCategories() {
    return this.categoriesRepository.find()
  }

  findCategorieById(id: number) {
    const categories = this.categoriesRepository.findOne({ where: { id } });

    if (!categories) {
      throw new NotFoundException(`Categorie with ID not found`);
    }

    return categories;
  }

  async createCategorie(createCategorieDto: CreateCategorieDto) {
    try {
      const newCategorie = this.categoriesRepository.create(createCategorieDto);
      await this.categoriesRepository.save(newCategorie);
      return 'La catégorie a été créée avec succès';
    } catch (error) {
      // Gérez les erreurs spécifiques si nécessaire
      console.error(error.message);
      throw new Error(error.message || 'Une erreur est survenue lors de la création de la catégorie');
      // throw new NotFoundException('Échec de la création de la catégorie');
    }
  }

  async updateCategorie(id: number, updateCategorieDto: UpdateCategorieDto) {
    // return this.categoriesRepository.update({ id }, { ...updateCategorieDto });
    try {
      const updateResult = await this.categoriesRepository.update({ id }, { ...updateCategorieDto });
      if (updateResult.affected > 0) {
        return 'La catégorie a été mise à jour avec succès.';
      } else {
        throw new Error('La catégorie avec cet ID n\'existe pas.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la catégorie :', error);
      // throw new Error('Une erreur est survenue lors de la mise à jour de la catégorie.');
      throw new Error(error.message);

    }
  }


  async deleteCategorieById(id: number) {
    try {
      const deleteResult = await this.categoriesRepository.delete({ id });

      if (deleteResult.affected === 1) {
        return 'La catégorie a été supprimée avec succès.';
      } else {
        throw new Error('La catégorie avec cet ID n\'existe pas.');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la catégorie :', error);
      throw new Error('Une erreur est survenue lors de la suppression de la catégorie');

    }
  }
}
