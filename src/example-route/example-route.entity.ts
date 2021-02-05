import { ApiResponseProperty } from "@nestjs/swagger";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(['unique_example_column'])
export class ExampleRouteEntity extends BaseEntity{

    // O primeiro Decorator pertence ao typeorm e faz a interação com o BD
    // O segundo Decorator pertence ao Swagger e popula o campo de Schemas

    @PrimaryGeneratedColumn()
    @ApiResponseProperty()
    id: number;

    @Column()
    @ApiResponseProperty()
    first_example_column: string;

    @Column()
    @ApiResponseProperty()
    unique_example_column: string;

}