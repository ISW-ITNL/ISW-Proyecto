import { LoginDTO } from './dto/login.dto';
import { ClienteService } from './cliente.service';
import { Controller, Get, Post, Body, UseGuards} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwt-auth.guard';


@ApiTags('api/cliente')
@Controller('api/cliente')
export class ClienteController {
    constructor(private readonly appService: ClienteService) {}

    @ApiParam({name:'email',required:true, type:String, description:'Email del usuario', example:'hola@gmail.com', allowEmptyValue:false})
    @ApiParam({name:'password',required:true, type:String, description:'Contraseña del usuario', example:'12345678', allowEmptyValue:false})
    @Post('login')
    login(@Body() cliente:LoginDTO){
        return this.appService.login(cliente);
    }
    
    @ApiBearerAuth() 
    @UseGuards(JwtAuthGuard)
    @Get('ver')
    ver(){
        return this.appService.ver();
    }
}
