import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Partage } from './Partage.entity';

@Entity({ name: 'photos_partages' })
export class PhotosPartage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  partage_id: number;

  @Column()
  image_bits: string; // Assurez-vous d'utiliser le type de données correct pour image_bits

  @ManyToOne(() => Partage)
  @JoinColumn({ name: 'partage_id' })
  partage: Partage;
}
