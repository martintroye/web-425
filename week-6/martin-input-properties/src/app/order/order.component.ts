import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order',
  template: `
  <h4 *ngIf="stockSymbol">Buying {{quantity}} shares of {{stockSymbol}}</h4>
  `,
  styles: [`

  h4{
    padding-top:1rem;
    color: darkblue;
  }

  `]
})
export class OrderComponent implements OnInit {

  @Input() stockSymbol: string;
  @Input() quantity: number;

  constructor() { }

  ngOnInit() {
  }

}
