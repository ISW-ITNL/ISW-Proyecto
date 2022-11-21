import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
