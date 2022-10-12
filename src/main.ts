import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('useSpices REST API')
    .setDescription('E-commerce api for usespices app')
    .setVersion('1.0')
    .addTag('usespices')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000, async function () {
    const url = await app.getUrl();
    console.log(`Listening at ${url}`);
    console.log(`Url for Swagger [OpenApi]: ${url}/docs`);
  });
}
bootstrap();
