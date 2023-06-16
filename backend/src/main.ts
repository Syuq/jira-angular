/*
 * Project: Angular Jira clone
 * Author: Syuq (syuq@gmail.com)
 * Homepage: https://github.com/syuq/jira-angular-clone
 * -----
 * Last Modified: Monday, 29th June 2023 9:43:45 am
 * Modified By: Syuq (syuq@gmail.com>)
 * -----
 * Copyright 2023 Syuq
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions = {
  origin: ['http://localhost:4200', /.syuq.com/],
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: corsOptions,
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
