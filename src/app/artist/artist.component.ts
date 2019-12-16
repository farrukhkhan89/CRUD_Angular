import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  constructor(private http: Http) { }
  confirmationString:string = "New Artist has been added";
  isAdded: boolean = false;
  artistObj:object = {};

  addNewArtist = function(artist) {
    this.artistObj = {
      _id: artist._id,
      artistName : artist.artistName
    };
    this.http.post("http://localhost:51044/api/artists", this.artistObj).subscribe((res:Response) => {
      this.isAdded = true;
    });
  };

  ngOnInit() {

  }

}
