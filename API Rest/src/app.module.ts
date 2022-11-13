import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './modulos/cliente/cliente.module';
import { AuthModule } from './modulos/auth/auth.module';

@Module({
  imports: [
    ClienteModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  //Variables Globales
  static puerto_lisent: number;
  constructor(private readonly configService: ConfigService) {
    AppModule.puerto_lisent = +this.configService.get<number>('PUERTO_LISENT');
    console.log('Puerto de escucha: ' + AppModule.puerto_lisent);
    
    
  }

}
