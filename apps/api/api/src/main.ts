import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Liquidador API')
  .setDescription('API Documentation')
  .setVersion('1.0')
  .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)

   //CORS//
  app.enableCors({
    origin: ['http://localhost:5173', 'http://localhost:3001'],
  });

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
