import Swal from 'sweetalert2';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pagar():void{
    // usar sweetalert2 para mostrar un mensaje de pago realizado con folio de pago
    Swal.fire({
      title: 'Pago realizado',
      text: 'Gracias por su pago, su folio de pago es: 123456789',
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })

  }

}
