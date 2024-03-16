import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PhotosSignalisation } from "./PhotosSignalisation.entity";

@Entity({ name: 'signalisations' })
export class Signalisation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    titre: string;

    @Column()
    description: string;

    @OneToMany(() => PhotosSignalisation, photo => photo.signalisation)
    photos: PhotosSignalisation[];
}