import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http) { }

  artists = [];
  fetchData = function() {
    this.http.get("http://localhost:51044/api/artists").subscribe(
      (res: Response) => {
        this.artists = res.json();
        var i=this.artists;
        console.log(i);

      }
    )
  }

  ngOnInit() {
    this.fetchData();
  }

}
