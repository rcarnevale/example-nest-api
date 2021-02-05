import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsOptional } from "class-validator";

export class ExampleFilterDTO {

    // Este Decorator lista as informações do DTO no Swagger
    @ApiProperty()

    // Estes decorator aplicam as validações quando chamados pelo ValidationPipe na requisição do controller
    @IsOptional()
    @IsNotEmpty()
    search: string;

    // Este Decorator lista as informações do DTO no Swagger
    @ApiProperty()

    // Estes decorator aplicam as validações quando chamados pelo ValidationPipe na requisição do controller
    @IsOptional()
    @IsNotEmpty()
    searchUnique: string

}