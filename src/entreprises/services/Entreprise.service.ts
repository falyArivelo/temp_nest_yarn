import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entreprise } from 'src/entities/Entreprise.entity';
import { CreateEntrepriseDto } from 'src/entreprises/dtos/CreateEntreprise.dto';
import { UpdateEntrepriseDto } from 'src/entreprises/dtos/UpdateEntreprise.dto';
import { Repository } from 'typeorm';

@Injectable()
export class EntreprisesService {
  constructor(
    @InjectRepository(Entreprise) private entreprisesRepository: Repository<Entreprise>,
  ) { }

  findEntreprises() {
    return this.entreprisesRepository.find({
      relations: [
      ]
    })
  }

  findEntrepriseById(id: number) {
    const entreprises = this.entreprisesRepository.findOne({
      where: { id },
      relations: [
      ]
    });

    if (!entreprises) {
      throw new NotFoundException(`Entreprise with ID not found`);
    }

    return entreprises;
  }

  async createEntreprise(createEntrepriseDto: CreateEntrepriseDto) {
    try {
      const newEntreprise = this.entreprisesRepository.create(createEntrepriseDto);
      await this.entreprisesRepository.save(newEntreprise);
      return 'La  Entreprise a été créée avec succès';
    } catch (error) {
      // Gérez les erreurs spécifiques si nécessaire
      console.error(error.message);
      throw new Error(error.message || 'Une erreur est survenue lors de la création de la Entreprise');
      // throw new NotFoundException('Échec de la création de la Entreprise');
    }
  }

  async updateEntreprise(id: number, updateEntrepriseDto: UpdateEntrepriseDto) {
    //return this.entreprisesRepository.update({ id }, { ...updateEntrepriseDto });
    try {
      const updateResult = await this.entreprisesRepository.update({ id }, { ...updateEntrepriseDto });

      if (updateResult.affected > 0) {
        return 'La Entreprise a été mise à jour avec succès.';
      } else {
        throw new Error('La Entreprise avec cet ID n\'existe pas.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la Entreprise :', error);
      throw new Error('Une erreur est survenue lors de la mise à jour de la Entreprise.');
    }
  }

  async deleteEntrepriseById(id: number) {
    //return this.entreprisesRepository.delete({ id });

    try {
      const deleteResult = await this.entreprisesRepository.delete({ id });

      if (deleteResult.affected === 1) {
        return 'La Entreprise a été supprimée avec succès.';
      } else {
        throw new Error('La Entreprise avec cet ID n\'existe pas.');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la Entreprise :', error);
      throw new Error('Une erreur est survenue lors de la suppression de la Entreprise');

    }
  }

  async findAllPaginated(page: number, limit: number): Promise<Entreprise[]> {
    const skip = (page - 1) * limit;

    return await this.entreprisesRepository.find({
      skip: skip,
      take: limit,
    });
 }

 async countAll(): Promise<number> {
  return await this.entreprisesRepository.count();
}

}
