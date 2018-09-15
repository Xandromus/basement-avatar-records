import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ARTISTS } from '../mock-artists';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})

export class ArtistsComponent implements OnInit {

  // artist: Artist = {
  //   id: 1,
  //   name: 'Proud Peasant'
  // };

  artists = ARTISTS;

  constructor() { }

  ngOnInit() {
  }

}
