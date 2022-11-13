import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  recuperarPassword(){
    Swal.fire({
      title: 'Recuperar contraseña',
      text: 'Ingrese su correo electrónico',
      input: 'email',
      inputPlaceholder: 'Ingrese su correo electrónico',
      showCancelButton: true,
      confirmButtonText: 'Enviar',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true
  });
  }

  ngOnInit(): void {
  }

}
