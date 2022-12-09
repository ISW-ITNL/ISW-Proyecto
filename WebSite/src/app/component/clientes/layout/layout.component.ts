import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//style boostrap 4 de assets
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() {
      
   }

  ngOnInit(): void {
    
  }

  salir(){
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
}
