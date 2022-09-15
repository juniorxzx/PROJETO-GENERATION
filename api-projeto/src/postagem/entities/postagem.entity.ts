import { IsNotEmpty, MaxLength } from "class-validator";;
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Tema } from "../../tema/entities/tema.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";


@Entity({name:'tb_postagem'})
export class Postagem{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    descricao: string

    @Column()
    imagem: string 


    @ManyToOne(() => Tema, (tema) => tema.postagem,{
        onDelete: "CASCADE"
    })
    tema: Tema

    @ManyToOne(() => Usuario, (usuario) => usuario.postagem,{
        onDelete: "CASCADE"
    })
    usuario: Usuario

}