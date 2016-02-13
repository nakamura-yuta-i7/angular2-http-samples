import {Component, OnInit} from 'angular2/core';
declare var $: any;

@Component({
	selector: `my-jquery-sample`,
	template: `
		<h1>JQUERY SAMPLE {{i}}</h1>
		<ul>
			<li *ngFor="#user of users">
				{{user.name}}
			</li>
		</ul>
	`,
	styles: [`
	`],
	
})
export class JquerySampleComponent {
	public users = [
		{ name:"yuta" },
	];
	i = 0;
	constructor() {
		setInterval(()=>{
			this.i++;
		}, 100);
	}
  ngOnInit() {
		$.ajax({
			url: "/app/get-sample/people.json",
			data: { yuta: "nakamura" }
		}).done(response => {
			this.users = response;
		})
	}
}
