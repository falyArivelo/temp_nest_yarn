import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Centre } from './Centre.entity';

@Entity({ name: 'photos_centres' })
export class PhotosCentres {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  centre_id: number;

  @Column()
  image_bits: string; // Assurez-vous d'utiliser le type de données correct pour image_bits

  @ManyToOne(() => Centre)
  @JoinColumn({ name: 'centre_id' })
  centre: Centre;
}
