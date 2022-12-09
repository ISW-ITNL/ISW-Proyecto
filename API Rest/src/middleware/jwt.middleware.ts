import { JwtService } from '@nestjs/jwt';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class JWTMiddleware implements NestMiddleware {
    constructor(private jwtService: JwtService) {
    }
async use(req: Request, res: Response, next: NextFunction) {
    // verificar si el token esta presente en la cabecera de la peticion
    if(req.headers['authorization']){
        // verificar si el token es valido
        try{
            await this.jwtService.verifyAsync(req.headers['authorization'].split(' ')[1],{secret:'mYA8%c253JhI'});
            const token = this.jwtService.decode(req.headers['authorization'].split(' ')[1]);
            req.body.cliente = token;
        }catch(e){
            return res.status(401).json({message:'No autorizado'});
        }
        
        

    }else{
        return res.status(401).json({message:'No autorizado'});
    }
    next();
  }
}
