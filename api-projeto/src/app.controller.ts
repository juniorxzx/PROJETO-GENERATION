import { Controller, Get, Res } from '@nestjs/common';
import { ApiExcludeEndpoint } from '@nestjs/swagger';


@Controller()
export class AppController {
  constructor() {}
  @ApiExcludeEndpoint() //Exclui o end-point Swagger 
  @Get()
    async redirect(@Res () resposta: any){
       return resposta.redirect('/swagger')
  }
}
