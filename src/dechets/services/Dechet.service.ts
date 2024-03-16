import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dechet } from 'src/entities/Dechet.entity';
import { CreateDechetDto } from 'src/dechets/dtos/CreateDechet.dto';
import { UpdateDechetDto } from 'src/dechets/dtos/UpdateDechet.dto';
import { Repository } from 'typeorm';

@Injectable()
export class DechetsService {
  constructor(
    @InjectRepository(Dechet) private dechetsRepository: Repository<Dechet>,
  ) { }

  findDechets() {
    return this.dechetsRepository.find({
      relations: [
        'categorie',
      ]
    })
  }

  findDechetById(id: number) {
    const dechets = this.dechetsRepository.findOne({
      where: { id },
      relations: [
        'categorie',
      ]
    });

    if (!dechets) {
      throw new NotFoundException(`Dechet with ID not found`);
    }

    return dechets;
  }

  createDechet(createDechetDto: CreateDechetDto) {
    try {
      const { designation, categorie_id, } = createDechetDto;
      const newDechet = this.dechetsRepository.create({
        designation,
        categorie: { id: categorie_id },
      });
      this.dechetsRepository.save(newDechet);
      return 'La  Dechet a été créée avec succès';
    } catch (error) {
      // Gérez les erreurs spécifiques si nécessaire
      console.error(error.message);
      throw new Error(error.message || 'Une erreur est survenue lors de la création de la Dechet');
      // throw new NotFoundException('Échec de la création de la Dechet');
    }
  }

  async updateDechet(id: number, updateDechetDto: UpdateDechetDto) {
    //return this.dechetsRepository.update({ id }, { ...updateDechetDto });
    try {
      const { designation, categorie_id, } = updateDechetDto;
      const updateResult = await this.dechetsRepository.update({ id }, {
        designation,
        categorie: { id: categorie_id },
      });

      if (updateResult.affected > 0) {
        return 'Le Dechet a été mise à jour avec succès.';
      } else {
        throw new Error('La Dechet avec cet ID n\'existe pas.');
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour de la Dechet :', error);
      throw new Error('Une erreur est survenue lors de la mise à jour de la Dechet.');
    }
  }

  async deleteDechetById(id: number) {
    //return this.dechetsRepository.delete({ id });

    try {
      const deleteResult = await this.dechetsRepository.delete({ id });

      if (deleteResult.affected === 1) {
        return 'La Dechet a été supprimée avec succès.';
      } else {
        throw new Error('La Dechet avec cet ID n\'existe pas.');
      }
    } catch (error) {
      console.error('Erreur lors de la suppression de la Dechet :', error);
      throw new Error('Une erreur est survenue lors de la suppression de la Dechet');

    }
  }


}
