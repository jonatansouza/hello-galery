import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  updateFavorite() {
    console.log("update color")
  }
 
}
