import {Component} from 'angular2/core';
import {Http, Response, RequestOptions, Headers, Request, RequestMethod} from 'angular2/http';

@Component({
    selector: 'simple-http',
    template: `
        <h2>Basic Request </h2>
        <button type="button" (click)="makeRequest()">Make Request</button>
        <div *ngIf="loading">loading ...</div>
        <pre>{{ data | json }}</pre>
    `
    
})
export class SimpleHTTPComponent {
  data: Object;
  loading: boolean;
  
  

  constructor(private http: Http) {
  }

  makeRequest()  {
    this.loading = true;
    this.http.request("http://jsonplaceholder.typicode.com/posts/1")
        .subscribe((res: Response) => {
        this.data = res.json();
        this.loading = false;
      });
  }
}