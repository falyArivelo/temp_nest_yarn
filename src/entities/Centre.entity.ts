import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'centres'})
export class Centre{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    adresse:string;
    @Column()
    longitude:number;
    @Column()
    latitude:number;
    
    // photos_centre:Photos_centre[];

}