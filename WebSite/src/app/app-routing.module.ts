import { LayoutComponent } from './component/clientes/layout/layout.component';
import { LoginComponent } from './component/clientes/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaldosComponent } from './component/clientes/saldos/saldos.component';

const routes: Routes = [
  { path: 'login',  pathMatch: 'full' ,component: LoginComponent , data: { title: 'LINMEX Login' } },
  { path: 'cliente', loadChildren: () => import('./component/clientes/clientes.module').then(m => m.ClientesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
