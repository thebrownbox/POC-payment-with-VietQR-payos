import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const PORT = process.env.PORT ?? 3020;
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });
  // ensure rawBody is available while still parsing for normal routes
  app.use(urlencoded({ extended: true }));
  app.use(json({}));
  await app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
}

bootstrap();
