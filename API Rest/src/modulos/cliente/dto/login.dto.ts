import { LoginClienteDto } from './login-user.dto';
import { PartialType } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength, MaxLength } from 'class-validator';


export class LoginDTO extends PartialType(LoginClienteDto){

}