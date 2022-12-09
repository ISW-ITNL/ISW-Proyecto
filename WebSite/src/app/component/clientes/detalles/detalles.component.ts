import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
   public planNombre = '';
   public titular = '';
   public planCosto = 0;
   public planDetalles = '';

   constructor(private http: HttpClient, private r : Router) { }

    ngOnInit(): void {
      this.http.post(environment.url_api +'cliente/get/plan',{} ).subscribe((res:any) => {
        this.planNombre = res.paquete.nombre_paquete;
        this.titular = res.titular;
        this.planCosto = res.paquete.precio;
        this.planDetalles = res.paquete.detalles_paquete;
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
      }
      );
    }


}
