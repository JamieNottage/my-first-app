import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MessageComponent } from 'src/message/message.component';
import { HeaderComponent } from 'src/header/header.component';
import { FooterComponent } from 'src/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    HeaderComponent,
    FooterComponent,
  ], // Register the components
  imports: [BrowserModule], // Load the child module
  providers: [],
  bootstrap: [AppComponent], // Load the first component on the page
})
export class AppModule {
  constructor() {
    console.log('AppModule Loaded');
  }
}
