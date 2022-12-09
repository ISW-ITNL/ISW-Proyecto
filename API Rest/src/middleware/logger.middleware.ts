import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // imprimir en consola la ruta que se esta llamando y el metodo que se esta usando (GET, POST, PUT, DELETE) y la ip del cliente y codigo de respuesta
    console.log(`[${req.method}] ${req.originalUrl} ${req.ip} ${res.statusCode}`);
    
    next();
  }
}