import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ExampleRouteRepository } from './example-route.repository';
import { CreateExampleDTO } from './dto/create-example.dto';
import { ExampleRouteEntity } from './example-route.entity';
import { ExampleFilterDTO } from './dto/example-filter.dto';

@Injectable()
export class ExampleRouteService {

    constructor(
        @InjectRepository(ExampleRouteRepository)
        private exampleRepository: ExampleRouteRepository
    ){}

    async getExamples(filter: ExampleFilterDTO): Promise<ExampleRouteEntity[]>{
        return this.exampleRepository.getExampleFiltered(filter)
    }

    async getExampleById(id:number): Promise<ExampleRouteEntity>{
        const exampleFound = await this.exampleRepository.findOne(id);

        if(exampleFound){
           return exampleFound; 
        } else {
            throw new NotFoundException(`Examplo com o id ${id} não encontrado.`);
        }
    }

    async createExample(createExample: CreateExampleDTO): Promise<ExampleRouteEntity>{
        return this.exampleRepository.createExample(createExample);
    }

    async deleteExample(id:number): Promise<void>{
        const result = await this.exampleRepository.delete(id);

        if(result.affected === 0){
            throw new NotFoundException(`Examplo com o id ${id} não encontrado.`);
        }
    }
}
