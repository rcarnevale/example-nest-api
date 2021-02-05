import { EntityRepository, Repository } from "typeorm";

import { ExampleRouteEntity } from './example-route.entity';
import { CreateExampleDTO } from './dto/create-example.dto';
import { ExampleFilterDTO } from './dto/example-filter.dto';
import { ConflictException, InternalServerErrorException, BadRequestException } from '@nestjs/common';

@EntityRepository(ExampleRouteEntity)
export class ExampleRouteRepository extends Repository<ExampleRouteEntity> {

    async getExampleFiltered(filter: ExampleFilterDTO): Promise<ExampleRouteEntity[]> {
        const { search, searchUnique } = filter;

        const query = this.createQueryBuilder('example');

        if(searchUnique){
            query.andWhere('example.unique_example_column LIKE :searchUnique', {searchUnique: `%${searchUnique}%`});
        }

        if(search){
            query.andWhere('example.first_example_column LIKE :search', {search: `%${search}%`});
        }


        const examples = query.getMany();
        return examples; 
    }

    async createExample(createExample: CreateExampleDTO): Promise<ExampleRouteEntity> {
        const { first_example_column, unique_example_column } = createExample;

        const example = new ExampleRouteEntity();
        example.first_example_column = first_example_column;
        example.unique_example_column = unique_example_column;

        try{
            await example.save();
        } catch (error){
            if (error.code === '23505') throw new ConflictException('Exemplo único já existe.')
            else throw new InternalServerErrorException();
        }

        return example;
    }
}