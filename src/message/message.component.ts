import { Component } from '@angular/core';

@Component({
  selector: 'msg',
  template: `<div class="card" style="width: 200px;">
    <div class="card-body">
      <h5 class="card-title">Panel title</h5>
      <p class="card-text">
        Some quick example text to build on the panel title and make up the bulk
        of the panel's content.
      </p>
    </div>
  </div>`,
})
export class MessageComponent {
  constructor() {
    console.log('MessageComponent Loaded... Root Component');
  }
}
