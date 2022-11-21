import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';  
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(__dirname + '../../../WebSite/dist/web-site');
  app.enableCors();
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('API para el proyecto de Ingeniería de Software')
    .setDescription('Esta API esta dieseñada para el modulo de Atencion al Cliente')
    .setVersion('1.0')
    .addTag('api/cliente')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/documentation', app, document);
  await app.listen(AppModule.puerto_lisent);
}
bootstrap();
