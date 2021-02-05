import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { ExampleRouteService } from './example-route.service';
import { CreateExampleDTO } from './dto/create-example.dto';
import { ExampleRouteEntity } from './example-route.entity';
import { ExampleFilterDTO } from './dto/example-filter.dto';

@ApiTags('Example') //Cria a tag do Swagger e inclui todos os métodos de requisição nela
@Controller('example')
export class ExampleRouteController {

    // Aqui entram os controllers que recebem a requisição, tratam o param ou body, e chamam o service
    // Os Decorators separam o tipo da requisições, aceitam parametros na url e recuperam os dados.
    

    constructor(
        private exampleService: ExampleRouteService
    ) { }


    @Get()

    // Lista as responses no Swagger
    @ApiOperation({summary: 'Listar os exemplos' })// Este Decorator adiciona o sumário no Swagger
    @ApiOkResponse({type: [ExampleRouteEntity]}) //Este Decorator define a Response type do status 200
    @ApiResponse({ status: 200, description: 'Sucesso (Success) - A solicitação obteve sucesso' })
    @ApiResponse({ status: 400, description: 'Requisição Inválida (Bad Request) - Erro na sintaxe da requisição' })
    @ApiResponse({ status: 403, description: 'Proibido (Forbidden) - O cliente não tem direito de acesso ao conteúdo' })
    @ApiResponse({ status: 404, description: 'Não Encontrado (Not Found) - O recurso solicitado não foi encontrado' })
    @ApiResponse({ status: 500, description: 'Erro Interno do Servidor (Internal Server Error) - Erro interno do servidor' })

    @UsePipes(ValidationPipe) //O ValidationPipe faz com que as class-validators definidas no DTO sejam aplicadas
    //Os decorators de Query, Param e Body recuperam as informações da requisição
    getExamples(@Query(ValidationPipe) filter: ExampleFilterDTO): Promise<ExampleRouteEntity[]> {
        return this.exampleService.getExamples(filter);
    }


    @Get('/:id')

    // Lista as responses no Swagger
    @ApiOperation({summary: 'Listar um exemplo' })// Este Decorator adiciona o sumário no Swagger
    @ApiOkResponse({type: ExampleRouteEntity}) //Este Decorator define a Response type do status 200
    @ApiResponse({ status: 200, description: 'Sucesso (Success) - A solicitação obteve sucesso' })
    @ApiResponse({ status: 400, description: 'Requisição Inválida (Bad Request) - Erro na sintaxe da requisição' })
    @ApiResponse({ status: 403, description: 'Proibido (Forbidden) - O cliente não tem direito de acesso ao conteúdo' })
    @ApiResponse({ status: 404, description: 'Não Encontrado (Not Found) - O recurso solicitado não foi encontrado' })
    @ApiResponse({ status: 500, description: 'Erro Interno do Servidor (Internal Server Error) - Erro interno do servidor' })


    getExampleById(@Param('id', ParseIntPipe) id: number): Promise<ExampleRouteEntity> {
        return this.exampleService.getExampleById(id);
    }


    @Post()

    // Lista as responses no Swagger
    @ApiOperation({summary: 'Cria um exemplo' })// Este Decorator adiciona o sumário no Swagger
    @ApiResponse({ status: 200, description: 'Sucesso (Success) - A solicitação obteve sucesso' })
    @ApiResponse({ status: 400, description: 'Requisição Inválida (Bad Request) - Erro na sintaxe da requisição' })
    @ApiResponse({ status: 403, description: 'Proibido (Forbidden) - O cliente não tem direito de acesso ao conteúdo' })
    @ApiResponse({ status: 404, description: 'Não Encontrado (Not Found) - O recurso solicitado não foi encontrado' })
    @ApiResponse({ status: 500, description: 'Erro Interno do Servidor (Internal Server Error) - Erro interno do servidor' })

    @UsePipes(ValidationPipe) //O ValidationPipe faz com que as class-validators definidas no DTO sejam aplicadas
    createExample(@Body() createExample: CreateExampleDTO) {
        this.exampleService.createExample(createExample);
    }


    @Delete('/:id')

    // Lista as responses no Swagger
    @ApiOperation({summary: 'Exclui um exemplo' })// Este Decorator adiciona o sumário no Swagger
    @ApiResponse({ status: 200, description: 'Sucesso (Success) - A solicitação obteve sucesso' })
    @ApiResponse({ status: 400, description: 'Requisição Inválida (Bad Request) - Erro na sintaxe da requisição' })
    @ApiResponse({ status: 403, description: 'Proibido (Forbidden) - O cliente não tem direito de acesso ao conteúdo' })
    @ApiResponse({ status: 404, description: 'Não Encontrado (Not Found) - O recurso solicitado não foi encontrado' })
    @ApiResponse({ status: 500, description: 'Erro Interno do Servidor (Internal Server Error) - Erro interno do servidor' })

    deleteExample(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.exampleService.deleteExample(id);

    }
}
