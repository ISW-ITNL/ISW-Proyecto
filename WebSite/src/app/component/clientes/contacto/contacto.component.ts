import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  enviar(){
    Swal.fire({
      title: 'Mensaje enviado',
      text: 'Gracias por contactarnos, pronto nos pondremos en contacto con usted',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })

  }

}
