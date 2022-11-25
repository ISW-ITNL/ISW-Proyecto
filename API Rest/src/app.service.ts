import { Injectable } from '@nestjs/common';
import { Res} from '@nestjs/common';


@Injectable()
export class AppService {
  getHello(res) {
    return res.sendFile('index.html');
  }
  getHola(res){
    
  }
}
