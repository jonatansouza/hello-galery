import { GlobalSettingsService } from './../../core/services/global-settings.service';
import { Hero } from './../interfaces/hero';
import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../interfaces/theme';

@Component({
  selector: 'hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() hero: Hero
  @Input() theme: Theme;
  ngOnInit() {
  }
  updateFavorite() {
    this.hero.favorite = !this.hero.favorite;
  }
  formatField(property: string){
    return property === "null" ? "-" : property;
  }
  updateUrlImage(evt: any){
    this.hero.image.url = "assets/hero.png"
  }
  
}
