import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn({ type: 'int'})
    id: number;
    
    @Column({ nullable: false, length: 100, type: 'varchar'})
    title: string;
    
    @Column({ length: 50, default: '00000000', type: 'varchar'})
    isbn: string;

    @Column({ length: 50, default: 'Unknown', type: 'varchar'})
    author: string;
}