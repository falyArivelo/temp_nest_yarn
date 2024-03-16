import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Signalisation } from './Signalisation.entity';

@Entity({ name: 'photos_signalisations' })
export class PhotosSignalisation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  signalisation_id: number;

  @Column({ type: 'text' }) // Utilisez le type 'text' pour stocker des chaînes de caractères plus longues comme les données base64
  image_bits: string;

  @ManyToOne(() => Signalisation)
  @JoinColumn({ name: 'signalisation_id' })
  signalisation: Signalisation;
}
