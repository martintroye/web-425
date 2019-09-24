import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <div class="container d-flex justify-content-center">
    <h1>Login here</h1>
  </div>
  `,
  styles: [
    `
      .container{
        padding-top: 4rem;
      }
      h1{
        color: red;
      }
    `
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
