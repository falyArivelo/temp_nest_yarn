import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dechet } from "./Dechet.entity";
import { Production } from "./Production.entity";

@Entity({ name: 'dechetProduits' })
export class DechetProduit {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Dechet)
    @JoinColumn({ name: 'dechet_id' })
    dechet: Dechet;
    @Column({ type: 'double precision' })
    quantite: number;

    @ManyToOne(() => Production, (production) => production.dechetProduits)
    production: Production;

}