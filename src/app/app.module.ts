import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EightBallComponent } from './eight-ball/eight-ball.component';
import { NumberComponent } from './number/number.component';


@NgModule({
  declarations: [
    AppComponent,
    EightBallComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
