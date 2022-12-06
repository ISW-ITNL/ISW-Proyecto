import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private http : HttpClient, private router:Router,private el: ElementRef) { 
    
  }

  addfocus(e: any) {
    let parent = e.parentNode.parentNode
    parent.classList.add("focus")
  }

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

  login(){
    this.http.post(environment.url_api+'cliente/login', {
      email: this.email,
      password: this.password
    }).subscribe((data:any) => {
      localStorage.setItem('token', data._token);
      this.router.navigate(['cliente/saldo']);
    }
    , (error) => {
      if(error.status == 401){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario o contraseña incorrectos',
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.message,
        });
      }
    }
    );
    

  }

  ngOnInit(): void {

  }
  focus(e: any) {
    var target = e.target
    target.parentNode.parentNode.classList.add("focus")
  }

  blur(e: any) {
    var target = e.target
    if (target.value == "") {
      target.parentNode.parentNode.classList.remove("focus")
    }
  }


}
