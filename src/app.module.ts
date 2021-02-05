import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';

import { ExampleRouteModule } from './example-route/example-route.module';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [
    ExampleRouteModule,
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
