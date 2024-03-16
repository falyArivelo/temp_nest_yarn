import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";

@Entity({ name: 'points' })
export class Point {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    valeur: number;
    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: User;
}