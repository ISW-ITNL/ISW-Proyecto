import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class PagoUserDto {
    @ApiProperty( { description: 'Numero de la tarjeta de credito', example: '1111 2222 3333 4444' } )
    @IsNotEmpty()
    cc: string;

    @ApiProperty( { description: 'CCV', example: '1234' } )
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(4)
    cvv: string;

    @ApiProperty( { description: 'Fecha de expiracion', example: '12/22' } )
    @IsNotEmpty()
    @MinLength(4)
    @MaxLength(5)
    exp: string;

}