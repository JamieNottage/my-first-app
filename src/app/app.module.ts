import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MessageComponent } from '../message/message.component';

@NgModule({
  declarations: [AppComponent, MessageComponent], // Register the components
  imports: [BrowserModule], // Load the child module
  providers: [],
  bootstrap: [AppComponent], // Load the first component on the page
})
export class AppModule {
  constructor() {
    console.log('AppModule Loaded');
  }
}
