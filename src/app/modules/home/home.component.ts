import { StorageProviderService } from './../../core/services/storage-provider.service';
import { GlobalSettingsService } from './../../core/services/global-settings.service';
import { Hero } from './../../shared/interfaces/hero';
import { HeroProviderService } from './../../core/services/hero-provider.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/shared/interfaces/theme';
import { environment } from 'src/environments/environment';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap } from "rxjs/operators";

@Component({
  selector: 'hero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public favoriteHeroes: Hero[] = [];
  public loadingFavoriteHeroes: boolean;
  public emptyFavorites: any = {};
  public luckHeroes: Hero[] = [];
  public loadingLuckHeroes: boolean;
  public loading: boolean;
  public foundHeroes: Hero[] = [];
  public theme: Theme;
  public N_HERO;
  public search = new FormControl("");
  constructor(
    private heroProvider: HeroProviderService,
    private globalSettings: GlobalSettingsService,
    private storageProvider: StorageProviderService
  ) {
    this.N_HERO = environment.CONFIG.N_LUCK_HERO || 0;
  }

  ngOnInit() {
    this.init();
  }
  public init() {
    this.theme = this.globalSettings.getTheme();
    this.globalSettings.getThemeChanges()
      .subscribe((t) => this.theme = t);
    this.createFormAndSubscribeEvents();

    this.fetchLuckHeroes();
    this.fetchFavoriteHeros();
    
    this.listenFavoriteHeroesChange();
    
    // get heroes from user preferencies
    this.emptyFavorites = {
      message: "Você ainda não possui favoritos!",
      icon: "smile",
      hint: "Você pode adicionar favoritos clicando na estrela no canto superior esquerdo da figurinha!"
    }
  }
  public createFormAndSubscribeEvents() {
    this.search.valueChanges.pipe(
      debounceTime(700),
      distinctUntilChanged(),
      tap((value) => {
        if (value) {
          this.loading = true;
        }
      }),
      switchMap((value: string) => this.heroProvider.searchHero(value))
    ).subscribe((value: any) => {
      this.loading = false;
      if (value && value.results && value.results.length) {
        this.foundHeroes = <Hero[]>value.results;
        return;
      }
      this.cleanFoundHeroes();
    })
  }
  public fetchFavoriteHeros() {
    this.loadingFavoriteHeroes = true;
    this.storageProvider.fetchUserFavoritesHeros().subscribe(favorites => {
      favorites.forEach(el => {
        this.heroProvider.getHeroById(el).subscribe(hero => {
          this.loadingFavoriteHeroes = false;
          this.favoriteHeroes.push(hero);
        })
      })
    })
  }
  public listenFavoriteHeroesChange() {
    this.loadingFavoriteHeroes = true;
    this.storageProvider.getUserFavorites().subscribe((favorites: string[]) => {
      if (this.favoriteHeroes.length === favorites.length) {
        return;
      }
      if (this.favoriteHeroes.length > favorites.length) {
        this.removeFavorite(favorites);
        return;
      }
      this.addFavorite()

    })
    return this.favoriteHeroes;
  }
  public addFavorite() {
    this.favoriteHeroes.push(...this.heroProvider.getCachedHero());
    this.heroProvider.cleanCachedHero();
  }

  public removeFavorite(favorites:string[]) {
    const fh = this.favoriteHeroes.map(el => el.id);
    let subArr = fh.filter(el => !favorites.includes(el));
    subArr.forEach(element => {
      const idx = fh.indexOf(element);
      this.favoriteHeroes.splice(idx, 1);
    });
  }

  public cleanSearch() {
    this.search.setValue("");
    this.cleanFoundHeroes();
  }
  public cleanFoundHeroes() {
    this.foundHeroes = [];
  }
  public fetchLuckHeroes() {
    this.loadingLuckHeroes = true;
    for (let i = 0; i < this.N_HERO; i++) {
      this.heroProvider.getHeroRandon().subscribe((hero) => {
        this.loadingLuckHeroes = false;
        this.luckHeroes.push(hero)
      });
    }
  }
  public getInputClass(): string{
    return this.theme ? this.theme.buttons : "";
  }
}