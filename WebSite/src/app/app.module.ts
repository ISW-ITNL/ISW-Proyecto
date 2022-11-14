import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/clientes/login/login.component';
import { SaldosComponent } from './component/clientes/saldos/saldos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SaldosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,SaldosComponent]
})
export class AppModule { }
