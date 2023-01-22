import { CreateDateColumn } from "typeorm";

export abstract class BaseEntity{
    @CreateDateColumn({ type: 'timestamp', nullable: false })
    createdAt!: Date
}