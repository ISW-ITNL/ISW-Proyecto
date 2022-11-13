import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Angular')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({ summary: 'Muestra la pagina Angular' })
  @ApiResponse({ status: 200, description: 'Angular' })
  @Get()
  getHello(@Res() res): any {
    return this.appService.getHello(res);
  }
}
