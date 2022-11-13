import { ClienteService } from './cliente.service';
import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('api/cliente')
@Controller('api/cliente')
export class ClienteController {
    constructor(private readonly appService: ClienteService) {}
    @Get()
    getHello(): string {
        return this.appService.getHello();
    }
    
}
