import {Entity, Column,PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';




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
    promociones : number;

    @Column()
    portabilidad : boolean;

    @Column({type: 'datetime', default: () => 'Current_timestamp()'})
    fecha_creacion: Date;

    @Column()
    password: string;

}

@Entity({name:'tipo_tarjetas'})
export class TipoTarjetas {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

}

@Entity({name:'metodos_pago'})
export class MetodosPago {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Clientes, cliente => cliente.id)
    @JoinColumn()
    cliente: Clientes;

    @Column()
    numero : string;

    @Column()
    expiracion : string;

    @Column()
    cvv : number;

    @Column()
    ultimos_digitos : string;

    @OneToOne(type => TipoTarjetas, tipo_tarjeta => tipo_tarjeta.id)
    @JoinColumn()
    tipo_tarjeta: TipoTarjetas;

}




@Entity({name:'pagos'})
export class Pagos {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => Clientes, cliente => cliente.id)
    @JoinColumn()
    cliente: Clientes;

    @Column()
    id_plan: number;

    @Column()
    id_promocion: number;

    @Column()
    portabilidad : boolean;

    @Column({type: 'datetime', default: () => 'Current_timestamp()'})
    fecha_pago: Date;

    @Column()
    monto: number;

    @OneToOne(type => MetodosPago, metodo_pago => metodo_pago.id)
    @JoinColumn()
    metodo_pago: MetodosPago;

}

