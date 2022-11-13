import {Entity, Column,PrimaryGeneratedColumn} from 'typeorm';
@Entity({name:'clientes'})
export class Clientes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column({unique: true})
    email: string;

    @Column({unique: true})
    telefono: string;

    @Column()
    direccion: string;

    @Column()
    ciudad: string;

    @Column()
    estado: string;

    @Column()
    codigo_postal: string;

    @Column()
    plan : number;

    @Column()
    promociones : string;

    @Column()
    portabilidad : boolean;

    @Column({type: 'datetime', default: () => 'Current_timestamp()'})
    fecha_creacion: Date;

    @Column()
    password: string;

}