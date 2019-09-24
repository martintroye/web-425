import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="container d-flex justify-content-center">
    <h1>You have landed on the Home page</h1>
  </div>
  `,
  styles: [
    `
    .container{
      padding-top: 4rem;
    }
    h1{
        color: green;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
