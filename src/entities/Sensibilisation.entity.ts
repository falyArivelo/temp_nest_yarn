import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PhotosSensibilisation } from "./PhotosSensibilisation.entity";

@Entity({ name: 'sensibilisations' })
export class Sensibilisation {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    titre: string;
    @Column()
    description:string;
    
    @OneToMany(() => PhotosSensibilisation, photo => photo.sensibilisation)
    photos: PhotosSensibilisation[];
}