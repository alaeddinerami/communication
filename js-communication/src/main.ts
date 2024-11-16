import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD
  await app.listen(3000);
=======
  

  app.enableShutdownHooks();

  app.enableCors();

  app.enableCors({
    origin: ['http://localhost:5173'],
    methods: 'GET,POST,PUT,DELETE', 
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(`Application is running on: http://localhost:${process.env.PORT ?? 3000}`, 'Bootstrap');
>>>>>>> 6270be9ad8e20e507b338d87388973b4cefb1944
}
bootstrap();
