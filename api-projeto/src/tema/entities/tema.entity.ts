import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entity";


@Entity({name:'tb_tema'})
export class Tema{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    nome: string


    @OneToMany(() => Postagem, (postagem) => postagem.tema,{
        onDelete: "CASCADE"
    })
    postagem: Postagem

}