import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate } from "typeorm";
import { IsNotEmpty, IsOptional, validateOrReject, ValidationError } from 'class-validator';


@Entity({ name: 'entreprises' })
export class Entreprise {

    private _id: number;

    @IsNotEmpty({message : "x ne doit pas etre vide"})
    private _nom: string;

    @IsNotEmpty({message : "type ne doit pas etre vide"})
    private _type: string;

    @IsNotEmpty({message : "activite ne doit pas etre vide"})
    private _activite: string;

    private _adresse: string;

    //id: number; 
    @PrimaryGeneratedColumn()
    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    @Column()
    get nom(): string {
        return this._nom;
    }

    set nom(value: string) {
        this._nom = value;
    }

    @Column()
    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    @Column()
    get activite(): string {
        return this._activite;
    }

    set activite(value: string) {
        this._activite = value;
    }

    @Column()
    get adresse(): string {
        return this._adresse;
    }

    set adresse(value: string) {
        this._adresse = value;
    }



    @BeforeInsert()
    @BeforeUpdate()
    async validate() {
        try {
            await validateOrReject(this, { skipMissingProperties: false });
        } catch (errors) {
            if (errors instanceof Array && errors.length > 0 && errors[0] instanceof ValidationError) {
                const errorMessage = Object.values(errors[1].constraints).join(', ');
                errors.forEach(error => {
                // const errorMessage = Object.values(error.constraints).join(', ');
                    console.log(error);
                });
            
                // console.log(errorMessage)
                throw new Error(errorMessage);
            }
        }
    }

}