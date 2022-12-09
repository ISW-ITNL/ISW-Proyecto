import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class SaldoUserDto {
    @ApiProperty( { description: 'Cantidad a pagar', example: '500.00' } )
    @IsNotEmpty()
    @IsEmail()
    monto: string;

    @ApiProperty( { description: 'Descuento al cliente', example: '100.00' } )
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    discount: string;

    @ApiProperty( { description: 'Nombre del paquete contratado', example: 'LIN000' } )
    @IsNotEmpty()
    paquetNme: string;

    @ApiProperty( { description: 'Descripcion del paquete', example: 'Cantidad de canales etc' } )
    @IsNotEmpty()
    paqueteDesc: string;
}