import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS}    from 'angular2/http';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
// var $;
declare var $: any;

@Component({
	selector: `my-post-sample`,
	template: `
		<h1>POST SAMPLE</h1>
		<ul>
			<li *ngFor="#user of users">
				{{user.name}}
			</li>
		</ul>
	`,
	styles: [`
		
	`],
	providers: [
		HTTP_PROVIDERS,
	]
})
export class PostSampleComponent {
	constructor (private http: Http) {
		
	}
	public users = [
		{ name: "puu" }
	];
	ngOnInit() {
		
		$.ajax({
			url: "/app/post-sample/post.php",
			method: "post",
			data: {
				yuta: "nakamura2",
			},
			success: res => {
				console.log( "jquery post", res );
			}
		});
		
		let name = "yuta nakamura";
		console.log( "koko1" );
		let body = JSON.stringify({ name });
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		return this.http.post("/api/post/test", body, options)
                    .map( res => {
											console.log( res );
											return res.json().data
										} )
                    .catch( e => {
											console.error( e )
											return Observable.throw( e.json().error || 'Server error' );
										} );
	}
}
