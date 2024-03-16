import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductionDetail } from "./ProductionDetail.entity";
import { DechetProduit } from "./DechetProduit.entity";
import { Entreprise } from "./Entreprise.entity";
@Entity({ name: 'productions' })
export class Production {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(() => Entreprise, { nullable: false })
    @JoinColumn({ name: 'entreprise_id' })
    entreprise: Entreprise;
    @Column()
    date: Date;

    @OneToMany(() => ProductionDetail, (productionDetail) => productionDetail.production)
    @JoinColumn()
    productionDetails: ProductionDetail[];

    @OneToMany(() => DechetProduit, (dechetProduit) => dechetProduit.production)
    @JoinColumn()
    dechetProduits: DechetProduit[];
}