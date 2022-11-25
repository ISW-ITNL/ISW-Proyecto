import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/clientes/login/login.component';
import { SaldosComponent } from './component/clientes/saldos/saldos.component';
import { PagosComponent } from './component/clientes/pagos/pagos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SaldosComponent,
    PagosComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,SaldosComponent]
})
export class AppModule { }
