import { Injectable } from '@angular/core';
import { Fruit } from './fruit';

@Injectable({
  providedIn: 'root'
})
export class FruitService {
  constructor() {}

  getFruit(): Fruit[] {
    const fruits = [];

    fruits.push(new Fruit(1, 'Apple', 'Red'));
    fruits.push(new Fruit(2, 'Banana', 'Yellow'));
    fruits.push(new Fruit(3, 'Watermelon', 'Green'));
    return fruits;
  }
}
