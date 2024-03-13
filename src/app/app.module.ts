// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations:[
    AppComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
