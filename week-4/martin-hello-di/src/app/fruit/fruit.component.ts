import { Component, OnInit } from '@angular/core';
import { FruitService } from './fruit.service';
import { Fruit } from './fruit';

@Component({
  selector: 'app-fruit',
  template: `
    <div class="container d-flex flex-column">
      <div class="flex-fill">
        <h2>Fruits</h2>
      </div>
      <div class="flex-fill">
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits">
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.color }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        padding-top: 4rem;
      }
      .element{
        margin: 0 auto;
      }
      .tbl-header{
        color: grey;
        text-decoration: underline;
      }
    `
  ]
})
export class FruitComponent implements OnInit {
  fruits: Fruit[];

  constructor(private fruitService: FruitService) {
    this.fruits = this.fruitService.getFruit();
  }

  ngOnInit() {}
}
