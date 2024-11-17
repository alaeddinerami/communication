import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Load environment variables from .env file
  dotenv.config();

  const app = await NestFactory.create(AppModule);

  // Enables graceful shutdown hooks
  app.enableShutdownHooks();

  // Enable global validation pipes for request validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Strips unknown properties from the request body
      forbidNonWhitelisted: true, // Throws an error for non-whitelisted properties
      transform: true, // Automatically transforms payloads to DTO instances
    }),
  );

  // Enable CORS to allow frontend communication
  app.enableCors({
    origin: 'http://localhost:5173', // Frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'], // Headers
    credentials: true, // Include cookies and credentials
  });

  // Start the application on the specified port or default to 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(`Application is running on: http://localhost:${port}`, 'Bootstrap');
}

bootstrap();
