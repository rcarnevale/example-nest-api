import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleRouteController } from './example-route.controller';
import { ExampleRouteService } from './example-route.service';
import { ExampleRouteRepository } from './example-route.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExampleRouteRepository])
  ],
  controllers: [ExampleRouteController],
  providers: [ExampleRouteService]
})
export class ExampleRouteModule {}
