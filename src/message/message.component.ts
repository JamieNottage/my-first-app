import { Component } from '@angular/core';

@Component({
  selector: 'msg',
  templateUrl: './message.component.html',
})
export class MessageComponent {
  constructor() {
    console.log('MessageComponent Loaded...');
  }
}
