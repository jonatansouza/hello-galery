import { HeroProviderService } from './../../core/services/hero-provider.service';
import { StorageProviderService } from './../../core/services/storage-provider.service';
import { Hero } from './../interfaces/hero';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Theme } from '../interfaces/theme';

@Component({
  selector: 'hero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() hero: Hero
  @Input() theme: Theme;
  @Output() updateHero: boolean;
  public disableBtn:boolean;
  private favoritesIds: string[] = [];
  constructor(private storageProvider :StorageProviderService,
              private heroProvider: HeroProviderService) {
    
  }
  ngOnInit() {
    this.storageProvider.getUserFavorites()
      .subscribe((favorites) => {
        this.favoritesIds = favorites;
        if(this.hero) {
          if(this.favoritesIds.includes(this.hero.id)){
            this.hero.favorite = true;
            return;
          }
          this.hero.favorite = false;
        }
      })
  }
  updateFavorite() {
    this.disableBtn = true;
    const idx = this.favoritesIds.indexOf(this.hero.id)
    if(this.hero.favorite){
      this.favoritesIds.splice(idx, 1);
    } else {
      this.favoritesIds.push(this.hero.id);
      this.heroProvider.pushCacheHero(this.hero);
    }
    this.storageProvider.updateUserFavorites(this.favoritesIds)
      .finally(() => this.disableBtn = false)
  }
  formatField(property: string){
    return property === "null" ? "-" : property;
  }
  updateUrlImage(evt: any){
    this.hero.image.url = "assets/hero.png"
  }
  
}
