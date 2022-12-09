import { HistorialPagosComponent } from './historial-pagos/historial-pagos.component';
import { DetallesComponent } from './detalles/detalles.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SaldosComponent } from './saldos/saldos.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component : LayoutComponent, children: [
    { path: 'saldos', component: SaldosComponent, data: { title: 'LINMEX Saldos' } },
    { path: 'contacto', component: ContactoComponent, data: { title: 'LINMEX Contacto' } },
    { path: 'detalles', component: DetallesComponent, data: { title: 'LINMEX Detalles' } },
    { path: 'historial-pagos', component : HistorialPagosComponent, data: { title: 'LINMEX Historial de pagos' }},

    { path: '', redirectTo: 'saldos', pathMatch: 'full'}
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
