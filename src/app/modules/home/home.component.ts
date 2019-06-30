import { GlobalSettingsService } from './../../core/services/global-settings.service';
import { Hero } from './../../shared/interfaces/hero';
import { HeroProviderService } from './../../core/services/hero-provider.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/shared/interfaces/theme';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap } from "rxjs/operators";
import { Observable } from 'rxjs';

@Component({
  selector: 'hero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private favoriteHeroes: Hero[] = [];
  private emptyFavorites: any = {};
  private luckHeroes: Hero[] = [];
  private loading: boolean;
  private foundHeroes: Hero[] = [];
  private theme: Theme;
  private N_HERO;
  private search:FormControl;
  constructor(
    private heroProvider: HeroProviderService,
    private globalSettings: GlobalSettingsService  
  ) { 
    this.N_HERO = environment.CONFIG.N_LUCK_HERO || 0;
  }
  
  ngOnInit() {
    this.theme = this.globalSettings.getTheme();
    this.search = new FormControl("");
    this.search.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      tap((value) => {
        if(value){
          this.loading = true;
        }
      }),
      switchMap((value:string) => this.heroProvider.searchHero(value))
    ).subscribe((value: any) => {
      this.loading = false;
      if(value && value.results && value.results.length){
        this.foundHeroes = <Hero[]> value.results;
        return;
      }
      this.foundHeroes = [];
    })
      
    
    this.globalSettings.getThemeChanges()
      .subscribe((t) => this.theme = t);
    this.getLuckHeroes();
    // get heroes from user preferencies
    this.emptyFavorites = {
      message: "Você ainda não possui favoritos!",
      icon: "smile",
      hint: "Você pode adicionar favoritos clicando na estrela no canto superios direito da figurinha!"
    }  
  }

  public getLuckHeroes(){
    for(let i = 0; i < this.N_HERO ; i++) {
      this.heroProvider.getHeroRandon().subscribe((hero) => {
        this.luckHeroes.push(hero)
      });
    }
  }

}