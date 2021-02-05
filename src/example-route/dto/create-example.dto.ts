import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateExampleDTO {

    // Este Decorator lista as informações do DTO no Swagger
    @ApiProperty()

    // Este decorator aplicam as validações quando chamados pelo ValidationPipe na requisição do controller
    @IsNotEmpty()
    first_example_column: string;

    // Este Decorator lista as informações do DTO no Swagger
    @ApiProperty()

    // Este decorator aplicam as validações quando chamados pelo ValidationPipe na requisição do controller
    @IsNotEmpty()
    unique_example_column: string;

}