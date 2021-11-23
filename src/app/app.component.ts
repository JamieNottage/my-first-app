import { Component } from '@angular/core';

@Component({
  selector: 'my-app-root',
  template: `<div style="background-color: azure; widthL 500px">
      <h1 style="text-align: center;">Welcome to Root Component</h1>
      <button class="btn btn-warning">Bootstrap Button</button>
    </div>
    <msg></msg>`,
})
export class AppComponent {
  constructor() {
    console.log('AppComponent Loaded... Root Component');
  }
}
