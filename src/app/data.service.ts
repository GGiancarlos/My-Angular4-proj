import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  cars = ['Toyota', 'Chevrolet', 'Nissan', 'Mazda'];

  myData() {
    return 'This is my Data!';
  }

}
