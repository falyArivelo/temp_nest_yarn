import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BeforeInsert, BeforeUpdate } from 'typeorm';
import { IsNotEmpty, validateOrReject, ValidationError } from 'class-validator';

@Entity({ name: 'categories' })
export class Categorie {

    private _id: number;

    @IsNotEmpty({message:"libelle tsy mety vide "})
    private _libelle: string;

    @PrimaryGeneratedColumn()
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }
    
    @Column()
    get libelle(): string {
        return this._libelle
    }

    set libelle(value: string) {
        // const trimmedValue = value.trim();

        // if (!trimmedValue) {
        //     throw new Error('Le nom ne peut pas être vide');
        // }
        this._libelle = value;
    }


    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
        try {
            await validateOrReject(this, { skipMissingProperties: true });
        } catch (errors) {
            if (errors instanceof Array && errors.length > 0 && errors[0] instanceof ValidationError) {
                const errorMessage = Object.values(errors[0].constraints).join(', ');
                console.log(errorMessage)
                throw new Error(errorMessage);
            }
        }
    }
}