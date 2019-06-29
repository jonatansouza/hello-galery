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
    this.hero.favorite = !this.hero.favorite;
  }
  formatField(property){
    return property === "null" ? "-" : property;
  }
  updateUrlImage(evt){
    console.log("imagem nao encontrada");
  }
  heroInformation() {
    console.log("should go to information ===> ", this.hero.name)
  }
}
