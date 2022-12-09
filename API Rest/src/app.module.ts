import { JwtModule } from '@nestjs/jwt';
import { JWTMiddleware } from './middleware/jwt.middleware';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { Module, MiddlewareConsumer, RequestMethod, NestModule  } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './modulos/cliente/cliente.module';

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
    ClienteModule,
    JwtModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule  {

  //Variables Globales
  static puerto_lisent: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.puerto_lisent = +this.configService.get<number>('PUERTO_LISENT');
    console.log('Puerto de escucha: ' + AppModule.puerto_lisent);
    
    
  }
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
    consumer
      .apply(JWTMiddleware)
      .exclude({ path: 'api/cliente/login', method: RequestMethod.POST })
      .forRoutes('*');
  }


}
