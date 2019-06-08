import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'rest-api-demo';
  http: Http;
  products: any;



  constructor(_http: Http) {

  	this.http = _http;

  	this.http.request('http://localhost:3000/products')
	  	.subscribe((res: Response) => {
	  		this.products = res.json();
	  	},
	  	error => {
	  	});
  }


}
