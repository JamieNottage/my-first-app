import { Component } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  // data or Model or properties
  title: string = 'HEADER COMPONENT';
  fname: string = 'john';
  person = {
    id: 100,
    name: 'jill',
    age: 18,
  };
  photo = 'assets/images/user.png';

  constructor() {
    console.log('HeaderComponent Loaded...');
    console.log(`Title property - ${this.title}`);
  }

  public updateTitle(): void {
    this.title = 'HEADERS COMPONENT';
  }
}
