import { JWTStrategy } from './../jwt.strategy';
import { Clientes, Pagos } from './cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Clientes,Pagos ]),
    JwtModule.register({
      secret : 'mYA8%c253JhI',
      signOptions: { expiresIn: '30m' },
    })
  ],
  controllers: [ClienteController],
  providers: [ClienteService, JWTStrategy ]
})
export class ClienteModule {}
