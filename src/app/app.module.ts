import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EightBallComponent } from './eight-ball/eight-ball.component';
import { NumberComponent } from './number/number.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
	declarations: [
		AppComponent,
		EightBallComponent,
		NumberComponent,
		AnswerComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
