import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class LoginClienteDto {
    @ApiProperty( { description: 'Email del cliente', example: 'hola@gmail.com' } )
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty( { description: 'Contraseña del cliente', example: '12345678' } )
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    password: string;
}