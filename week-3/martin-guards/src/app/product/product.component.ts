import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  template: `
    <div class="container justify-content-center">
      <h1>Product component</h1>
      <p>
        <input type="text" class="form-control" [formControl]="name" placeholder="Enter your name" />
      </p>
    </div>
  `,
  styles: [
    `
      .container{
        padding-top: 4rem;
      }
      h1{
        color: blue
      }
    `
  ]
})
export class ProductComponent implements OnInit {
  name: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}
