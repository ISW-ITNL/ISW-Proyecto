import { Strategy } from "passport-jwt";
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super(
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey : 'mYA8%c253JhI'
      }
    );
  }
  async validate(payload: any) {
    return { id: payload.sub, username: payload.username };
  }
}