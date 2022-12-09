import { HttpTokenInterceptor } from './http-token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/clientes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS ,useClass:HttpTokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
