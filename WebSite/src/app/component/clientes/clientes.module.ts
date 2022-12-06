import { LayoutComponent } from './layout/layout.component';
import { SaldosComponent } from './saldos/saldos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { DetallesComponent } from './detalles/detalles.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HistorialPagosComponent } from './historial-pagos/historial-pagos.component';


@NgModule({
  declarations: [
    LayoutComponent,
    SaldosComponent,
    DetallesComponent,
    ContactoComponent,
    HistorialPagosComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    
  ]
})
export class ClientesModule { }
