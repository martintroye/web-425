import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container d-flex justify-content-center">
      home works!
    </div>
  `,
  styles: [
    `
    .container{
      padding-top:4rem;
    }
    `
  ]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}