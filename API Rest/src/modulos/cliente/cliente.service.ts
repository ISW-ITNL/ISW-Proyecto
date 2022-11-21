import { LoginDTO } from './dto/login.dto';
import { Clientes } from './cliente.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
var crypto = require('crypto');

@Injectable()
export class ClienteService {
    constructor(@InjectRepository(Clientes) private clienteRepo:Repository<Clientes>,
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
        }
        return {_token:this.jwtService.sign(data)};
    }

    ver(){
        return 'Hola';
    }

}
