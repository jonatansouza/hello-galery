import { Hero } from './../interfaces/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() hero: Hero
  constructor() { }

  ngOnInit() {
  }
  updateFavorite() {
    console.log("update color")
  }
  formatField(property){
    return property === "null" ? "-" : property;
  }
}
