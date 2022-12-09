import { PagoUserDto } from './dto/pago-user.dto';
import { LoginDTO } from './dto/login.dto';
import { ClienteService } from './cliente.service';
import { Controller, Get, Post, Body, UseGuards, Req} from '@nestjs/common';
import { ApiBearerAuth, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwt-auth.guard';


@ApiTags('api/cliente')
@Controller('api/cliente')
export class ClienteController {
    constructor(private readonly appService: ClienteService) {}

    @ApiParam({name:'email',required:true, type:String, description:'Email del usuario', example:'hola@gmail.com', allowEmptyValue:false})
    @ApiParam({name:'password',required:true, type:String, description:'Contraseña del usuario', example:'12345678', allowEmptyValue:false})
    @ApiResponse({status:200, description:'Retorna el token de autenticación'})
    @ApiResponse({status:401, description:'No autorizado'})
    @Post('login')
    login(@Body() cliente:LoginDTO){
        return this.appService.login(cliente);
    }
    
    @ApiBearerAuth() 
    @ApiResponse({status:401, description:'No autorizado'})
    @ApiResponse({status:200, description:'Retorna el saldo del usuario'})
    @Post('get/saldo')
    getSaldo(@Req() req){
        return this.appService.getSaldo(req);
    }

    @ApiBearerAuth() 
    @ApiResponse({status:401, description:'No autorizado'})
    @ApiResponse({status:200, description:'OK'})
    @Post('set/pago')
    setPago(@Body() pago:PagoUserDto, @Req() req){
        return this.appService.setPago(pago,req);
    }

    @ApiBearerAuth() 
    @ApiResponse({status:401, description:'No autorizado'})
    @ApiResponse({status:200, description:'Devuelve el plan del usuario'})
    @Post('get/plan')
    getPlan(@Req() req){
        return this.appService.getPlan(req);
    }

    @ApiBearerAuth() 
    @ApiResponse({status:401, description:'No autorizado'})
    @ApiResponse({status:200, description:'Devuelve los pagos del usuario'})
    @Post('get/pago')
    getPagos(@Req() req){
        return this.appService.getPagos(req);
    }

    @ApiBearerAuth()
    @ApiResponse({status:401, description:'No autorizado'})
    @ApiResponse({status:200, description:'Devuelve la factura'})
    @Get('get/factura/:id')
    getFactura(@Req() req){
        return this.appService.getFactura(req);
    }



}
