import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);


  // CÓDIGO DE INICIALIZAÇÃO DO SWAGGER

  const sigeluOpts = {
    customSiteTitle: 'API de Exemplo',
    customfavIcon: 'url do icone'
  }

  const config = new DocumentBuilder()
    .setTitle('Example-API')
    .setDescription('Api de exemplo')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, sigeluOpts);

  //////////////////////////////////////



  await app.listen(3000);
}
bootstrap();
