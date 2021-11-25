import { Component } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  constructor() {
    console.log('FooterComponent Loaded...');
  }

  // event handler methods or functions
  public greet(): void {
    window.alert('Welcome to events');
  }
}
