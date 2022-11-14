import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { ClienteController } from './cliente.controller';
import { ClienteService } from './cliente.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV + '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],      
      useFactory: (configService: ConfigService) => ({
        type: 'mssql' ,
        host: configService.get<string>('SERVIDOR_BDD'),
        port: parseInt(configService.get<string>('PUERTO_BDD')),
        username: configService.get<string>('USUARIO_BDD'),
        password: configService.get<string>('CONTRASENIA_BDD'),
        database: configService.get<string>('BASE_DE_DATOS'),
        entities: [__dirname + '/modulos/**/*.entity{.ts,.js}'],
        synchronize: true
      }),
      inject: [ConfigService]
      
    }),
  ],
  controllers: [ClienteController],
  providers: [ClienteService]
})
export class ClienteModule {}
