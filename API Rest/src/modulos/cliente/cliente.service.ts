import { PagoUserDto } from './dto/pago-user.dto';
import { Request } from 'express';
import { SaldoUserDto } from './dto/saldo-user.dto';
import { LoginDTO } from './dto/login.dto';
import { Clientes, Pagos, MetodosPago } from './cliente.entity';
import { HttpException, Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
var crypto = require('crypto');

@Injectable()
export class ClienteService {
    constructor(@InjectRepository(Clientes) private clienteRepo:Repository<Clientes>,@InjectRepository(Pagos) private pagoRepo:Repository<Pagos>,
    private jwtService: JwtService) {}

    async login(cliente:LoginDTO){
        const userFind = await this.clienteRepo.findOne({where:{email:cliente.email,password:crypto.createHash('sha256').update(cliente.password).digest('hex')}});
        if(!userFind){
            throw new HttpException('Usuario o contraseña incorrectos', 401);
        }
        const data = {
            id:userFind.id,
            email:userFind.email,
            nombre:userFind.nombre,
            expiresIn : 3600,
            timestamp : new Date().getTime()
        }
        
        return {_token:this.jwtService.sign(data)};
    }

    async getSaldo(req:Request){
    
        const userFind = await this.clienteRepo.findOne({where:{id:req.body.cliente.id},relations:['paquete']});
        //obtener cuantos meses han pasado desde la fecha de inicio del paquete
        const meses = Math.floor((new Date().getTime() - new Date(userFind.fecha_creacion).getTime()) / (1000 * 60 * 60 * 24 * 30));
        
        return {
            monto : userFind.paquete.precio * meses,
            discount : userFind.descuento,
            paquetNme : userFind.paquete.nombre_paquete  ,
            paqueteDesc : userFind.paquete.detalles_paquete
        }

        
        
    }

    async setPago(pago:PagoUserDto, req:Request){
        const userFind = await this.clienteRepo.findOne({where:{id:req.body.cliente.id},relations:['paquete']});
        //obtener cuantos meses han pasado desde la fecha de inicio del paquete
        const meses = Math.floor((new Date().getTime() - new Date(userFind.fecha_creacion).getTime()) / (1000 * 60 * 60 * 24 * 30));
        const saldo = userFind.paquete.precio * meses;

        var t = this.pagoRepo.save({
            cliente:userFind,
            fecha_pago:new Date(),
            monto:saldo
        }).then((res)=>{
            this.clienteRepo.update(userFind.id,{fecha_creacion:new Date()});
        }).catch((err)=>{
            return {status:'ERROR'};
        });
        //
        return {status:'OK'};

    }

    async getPlan (req:Request){
        const userFind = await this.clienteRepo.findOne({where:{id:req.body.cliente.id},relations:['paquete']});
        return {paquete:userFind.paquete, titular:req.body.cliente.nombre};
    }

    async getPagos(req:Request){
        const userFind = await this.pagoRepo.find({where:{cliente:req.body.cliente.id}});
        return userFind;
    }

    getFactura(req:Request){
        
    }


}
