import { LoginComponent } from './component/clientes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaldosComponent } from './component/clientes/saldos/saldos.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full' ,component: LoginComponent , data: { title: 'LINMEX Login' } },
  { path: 'saldo',  pathMatch: 'full' ,component: SaldosComponent , data: { title: 'LINMEX Saldos' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
