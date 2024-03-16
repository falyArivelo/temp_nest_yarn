import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Entreprise } from "./Entreprise.entity";

@Entity({ name: 'user_profiles' })
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    designation: string;

    @ManyToOne(() => Entreprise, { nullable: true })
    @JoinColumn({ name: 'entreprise_id' })
    entreprise: Entreprise;
}