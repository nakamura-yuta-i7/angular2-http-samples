import {Component} from 'angular2/core';
import {JSONP_PROVIDERS}  from 'angular2/http';
import {Jsonp, URLSearchParams} from 'angular2/http';
import {Observable}       from 'rxjs/Observable';

@Component({
	selector: `my-jsonp-sample`,
	template: `
		<div>
			<h1>JSONP SAMPLE</h1>
			<input type="text" #q (keyup)="onKeyup(q.value)">
			<ul>
				<li *ngFor="#res of result | async">
					{{res.title}} : {{res.desc}}
				</li>
			</ul>
		</div>
	`,
	styles: [``],
	providers: [
		JSONP_PROVIDERS,
	],
})
export class JsonpSampleComponent {
	result: Observable<any[]>;
	// public result = [];
	constructor(private jsonp: Jsonp) {}
	onKeyup(q) {
		console.log( q );
		this.result = this.search(q);
	}
  search (term: string) {

    let wikiUrl = 'http://ja.wikipedia.org/w/api.php';

    var params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    // TODO: Add error handling
    return this.jsonp
               .get( wikiUrl, { search: params })
               .map( res => {
								 let data = []
								 Object.keys(res.json()[1]).forEach((key)=>{
									//  console.log( key );
									let datum = {
										title: res.json()[1][key],
										desc: res.json()[2][key],
									};
									data.push(datum);
								 })
								//  console.log( "data", data );
								 return data;
							 } );
  }
}
