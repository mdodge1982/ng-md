import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eight-ball',
  templateUrl: './eight-ball.component.html',
  styleUrls: ['./eight-ball.component.css']
})
export class EightBallComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  answerState = false
  answer = ''

  answerSet = [
	  'It is certain',
	  'It is decidedly so',
	  'Without a doubt',
	  'Yes definitely',
	  'You may rely on it',
	  'As I see it, yes',
	  'Most likely',
	  'Outlook good',
	  'Yes',
	  'Signs point to yes',
	  'Reply hazy try again',
	  'Ask again later',
	  'Better not tell you now',
	  'Cannot predict now',
	  'Concentrate and ask again',
	  'Don\'t count on it',
	  'My reply is no',
	  'My sources say no',
	  'Outlook not so good',
	  'Very doubtful'
  ]

  onClick() {
	  this.answerState = !this.answerState
	  if(this.answerState){
		  var rand = Math.floor(Math.random()*this.answerSet.length)
		  this.answer = this.answerSet[rand]
	  }
  }

}
