import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Component, OnInit, ViewEncapsulation, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit {

  public numeroTarjeta:string = '';
  public nombre:string = '';
  public expiracion:any;
  public cvv:string = '';
  public imgSrc:string = 'assets/img/tarjetas-izipay.png';

  public monto = 0;
  public discount = 0;
  public iva = 0;

  public paquetNme = '';
  public paqueteDesc = '';

  public pagarbool = false;

  constructor(private http: HttpClient,private r: Router ) { }

  ngOnInit(): void {
    this.http.post(environment.url_api +'cliente/get/saldo',{} ).subscribe((res:any) => {
      this.monto = res.monto;
      this.iva = res.monto*0.16;
      this.discount = res.discount;
      this.monto = this.monto - this.discount;
      this.paquetNme = res.paquetNme;
      this.paqueteDesc = res.paqueteDesc;
      if(this.monto == 0){
        this.pagarbool = true;
      }
      
    }
    , (error) => {
      if(error.status == 401){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No tienes permiso para realizar esta acción',
        });
        localStorage.removeItem('token');
        this.r.navigate(['/login']);
        return;
      }
    });

  }

 
  chan(){
    // agregar espacio cada 4 digitos
    this.numeroTarjeta = this.numeroTarjeta.replace(/\s/g, '');
    this.numeroTarjeta = this.numeroTarjeta.replace(/(\d{4})/g, '$1 ').trim();

    if(this.numeroTarjeta[0] == '4'){
      this.imgSrc = 'assets/img/visa_logo.png';
    }else if(this.numeroTarjeta[0] == '5'){
      this.imgSrc = 'assets/img/MasterCard_Logo.svg.png';
    }else if(this.numeroTarjeta[0] == '3'){
      this.imgSrc = 'assets/img/amex-icon.png';
    }else{
      this.imgSrc = 'assets/img/tarjetas-izipay.png';
    }
  }

  pagar():void{
    // validar datos de la tarjeta
    if(this.numeroTarjeta.length < 19){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El número de tarjeta es incorrecto',
      });
      return;
    }

    if(this.nombre.length < 3){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El nombre es incorrecto',
      });
      return;
    }

    if(this.expiracion == undefined){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La fecha de expiración es incorrecta',
      });
      return;
    }

    if(this.cvv.length < 3){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'El cvv es incorrecto',
      });
      return;
    }

    // comprobar que la fecha de expiración no sea menor a la actual
    let fechaActual = new Date();
    let fechaExpiracion = new Date(this.expiracion);
    if(fechaExpiracion > fechaActual){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'La fecha de expiración es incorrecta',
      });
      return;
    }

    Swal.fire({

      title: '¿Está seguro de realizar el pago?',
      text: "Se le cobrará el monto total de su compra",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, pagar'
    }).then((result) => {
      
      if (result.isConfirmed) {

        this.http.post(environment.url_api +'cliente/set/pago',{} ).subscribe((res:any) => {
          console.log(res);
        }
        , (error) => {
          if(error.status == 401){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No tienes permiso para realizar esta acción',
            });
            localStorage.removeItem('token');
            this.r.navigate(['/login']);
            return;
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Ocurrió un error al realizar el pago',
            });
            return;
          }
        });
        Swal.fire(
          'Pago realizado',
          'Su pago se ha realizado con éxito',
          'success'
        )
        window.location.reload();
      }
    }
    )

  }
}
