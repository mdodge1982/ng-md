import { Component, OnInit, Input } from '@angular/core';
import {
	trigger,
	state,
	style,
	animate,
	transition
} from '@angular/animations';

@Component({
	selector: 'app-number',
	templateUrl: './number.component.html',
	styleUrls: ['./number.component.css'],
	animations: [
		trigger('visibilityChanged', [
			state('true', style({
				opacity: '1'
			})),
			state('false', style({
				opacity: '0'
			})),
			transition('false => true', animate('1s'))
		])
	]
})
export class NumberComponent implements OnInit {
	visibility = 'hidden';
	@Input() toggle: boolean = false;
}
