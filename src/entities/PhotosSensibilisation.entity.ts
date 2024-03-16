import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Sensibilisation } from './Sensibilisation.entity';

@Entity({ name: 'photos_sensibilisations' })
export class PhotosSensibilisation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sensibilisation_id: number;

    @Column()
    image_bits: string; // Assurez-vous d'utiliser le type de données correct pour image_bits

    @ManyToOne(() => Sensibilisation)
    @JoinColumn({ name: 'sensibilisation_id' })
    sensibilisation: Sensibilisation;
}
