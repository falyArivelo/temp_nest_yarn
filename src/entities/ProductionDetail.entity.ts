import { Column, Double, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Production } from "./Production.entity";

@Entity({name:'productionDetails'})
export class ProductionDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nom_produit: string;

    @Column({ type: 'double precision' })
    quantite: number;

    @ManyToOne(() => Production, (production) => production.productionDetails)
    production: Production;

}