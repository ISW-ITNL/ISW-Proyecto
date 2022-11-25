import { LoginComponent } from './component/clientes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaldosComponent } from './component/clientes/saldos/saldos.component';
import { PagosComponent } from './component/clientes/pagos/pagos.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full' ,component: LoginComponent , data: { title: 'LINMEX Login' } },
  { path: '',  pathMatch: 'full' ,component: SaldosComponent , data: { title: 'LINMEX Saldos' } },
  { path: 'home',  pathMatch: 'full' ,component: PagosComponent , data: { title: 'LINMEX pagos' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
