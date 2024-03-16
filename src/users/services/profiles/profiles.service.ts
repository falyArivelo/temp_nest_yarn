import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/entities/Profile.entity';
import { CreateProfileDto } from 'src/users/dtos/CreateProfile.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ProfilesService {

    constructor(
        @InjectRepository(Profile) private profileRepository: Repository<Profile>
    ) { }

    findProfiles() {
        return this.profileRepository.find({relations: ['entreprise'] });
    }

    createProfile(createProfileDto: CreateProfileDto) {
        return this.profileRepository.save(this.profileRepository.create(createProfileDto));
    }
}
