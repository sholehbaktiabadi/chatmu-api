import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./base";

@Entity({ name: 'user' })
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({ type: 'varchar' })
    username!: string;

    @Column({ type: 'varchar' })
    email!: string;

    @Column({ type: 'varchar', default: 'password' })
    password!: string;
}