import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categorie } from "./Categorie.entity";

@Entity({ name: 'dechets' })
export class Dechet {
    _id: number;
    _designation: string;
    _categorie: Categorie;
  existingDechet: { id: number; };
    //id: number; 
    @PrimaryGeneratedColumn()
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    @Column()
    get designation(): string {
        return this._designation;
    }


    set designation(value: string) {
        const trimmedValue = value.trim();

        if (!trimmedValue) {
            throw new Error('Le designation ne peut pas être vide');
        }

        this._designation = trimmedValue;
    }

    @ManyToOne(() => Categorie, { nullable: true })
    @JoinColumn({ name: 'categorie_id' })

    get categorie(): Categorie {
        return this._categorie;
    }

    set categorie(value: Categorie) {
        this._categorie = value;
    }




}