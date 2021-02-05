import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432, // Porta padrão do PostgreSQL
    username: 'postgres', // Conta que a API usa
    password: '12345', // Aqui entra a senha da conta que a API usa
    database: 'nome_do_bd', // Aqui entra o nome do BD
    autoLoadEntities: true,
    synchronize: true //Essa opção só deve estar descomentada para testes locais
}
