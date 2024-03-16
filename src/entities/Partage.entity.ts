import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User.entity";
import { PhotosPartage } from "./PhotosPartage.entity";

@Entity({ name: 'partages' })
export class Partage {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    description: string;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToMany(() => PhotosPartage, photo => photo.partage)
    photos: PhotosPartage[];


}