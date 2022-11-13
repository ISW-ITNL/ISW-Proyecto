import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV + '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],      
      useFactory: (configService: ConfigService) => ({
        type: 'mysql' ,
        host: configService.get<string>('SERVIDOR_BDD'),
        port: parseInt(configService.get<string>('PUERTO_BDD')),
        username: configService.get<string>('USUARIO_BDD'),
        password: configService.get<string>('CONTRASENIA_BDD'),
        database: configService.get<string>('BASE_DE_DATOS'),
        entities: [__dirname + '/modulos/**/*.entity{.ts,.js}'],
        synchronize: false
      }),
      inject: [ConfigService]
      
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
