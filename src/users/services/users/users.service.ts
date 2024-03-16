import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Entreprise } from 'src/entities/Entreprise.entity';
import { Profile } from 'src/entities/Profile.entity';
import { User } from 'src/entities/User.entity';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) { }

    findUsers() {
        return this.userRepository.find()
    }

    findUserById(id: number) {
        const user = this.userRepository.findOne({ where: { id } });

        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return user;
    }

    async findByEmail(email: string) {
        // const user = this.userRepository.findOne({ where: { email } });
        const user = await this.userRepository.findOne({ where: { email } });

        if (!user) {
            throw new NotFoundException(`User with email ${email} not found`);
        }
        return user;
    }

    createUser(createUserDto: CreateUserDto) {
        try {
            const newUser = this.userRepository.create(createUserDto);
            this.userRepository.save(newUser);
            return 'Inscription reussie ! ';
        } catch (error) {
            console.error(error.message);
            throw new Error(error.message || 'Inscription erreur !');
        }

    }


    updateUser(id: number, updateUserDto: UpdateUserDto) {
        return this.userRepository.update({ id }, { ...updateUserDto });
    }

    deleteUSerById(id: number) {
        return this.userRepository.delete({ id });
    }


}
