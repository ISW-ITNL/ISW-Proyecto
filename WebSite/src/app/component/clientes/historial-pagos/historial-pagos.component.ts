import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historial-pagos',
  templateUrl: './historial-pagos.component.html',
  styleUrls: ['./historial-pagos.component.scss']
})
export class HistorialPagosComponent {
  public pagos = [{
    id : 0,
    fecha_pago : '',
    monto : 0,
  }];


  constructor(private http:HttpClient, private r : Router) {

   }

   ngOnInit(){
    this.pagos=[];
    this.http.post(environment.url_api +'cliente/get/pago',{} ).subscribe((res:any) => {
      //convertir la fecha_pago a formato dd/mm/yyyy hh:mm:ss
      for(let i=0; i<res.length; i++){
        let fecha = new Date(res[i].fecha_pago);
        let dia = fecha.getDate();
        let mes = fecha.getMonth()+1;
        let anio = fecha.getFullYear();
        let hora = fecha.getHours();
        let minuto = fecha.getMinutes();
        let segundo = fecha.getSeconds();
        res[i].fecha_pago = dia+'/'+mes+'/'+anio+' '+hora+':'+minuto+':'+segundo;
        this.pagos.push(res[i]);
      }
    }, (error) => {
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
    }
    );


   }

   factura(id:any){
    Swal.fire({
      title: 'Se genero la factura',
      text: 'Llegara a tu correo electronico',
      icon: 'success',
      confirmButtonText: 'Ok'
    });

    }

}
