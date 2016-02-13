import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';

@Component({
	selector: `my-get-sample`,
	template: `
		<div>
			<h1>HTTP GET SAMPLE</h1>
			<div class="result-area">
				<ul>
					<li *ngFor="#person of people">
						{{person.name}}
					</li>
				</ul>
			</div>
		</div>
	`,
	styles: [``],
	providers: [
		HTTP_PROVIDERS,
	],
})
export class GetSampleComponent {
	public people = [];
	constructor (private http: Http) {}
  ngOnInit() {
		this.getPeople().subscribe(
			people => this.people = people,
			error => {
				console.log( error );
			},
			() => {
				console.log( "complete" );
			}
		);
	}
	getPeople() {
    return this.http
			.get("/app/get-sample/people.json")
      .map( res => {
				console.log( res.json() );
				return res.json();
			} )
      .catch(function(error) {
				return Observable.throw(JSON.stringify(error) || 'Server error');
			});
	}
}
