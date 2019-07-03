import { Hero } from './../../shared/interfaces/hero';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroProviderService {
  private MAX_HERO_ID: number;
  private apiUrl: string;
  private url: string;
  private cachedHeroes: Hero[] = [];
  constructor(private http: HttpClient) {
    this.apiUrl = environment.HERO_API.URL;
    this.MAX_HERO_ID = environment.CONFIG.MAX_HERO_ID || 1;
    this.url = `${this.apiUrl}${environment.HERO_API.TOKEN}`
  }

  public getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.url}/${id}`);
  }
  public getHeroRandon() {
    const t = () => Math.floor(Math.random() * this.MAX_HERO_ID) + 1;
    return this.getHeroById(`${t()}`);
  }
  public searchHero(name: string) {
    return this.http.get<Hero>(`${this.url}/search/${name}`);
  }
  public pushCacheHero(hero: Hero) {
    this.cachedHeroes.push(hero);
  }
  public getCachedHero(): Hero[] {
    return this.cachedHeroes;
  }
  public cleanCachedHero() {
    this.cachedHeroes = [];
  }
}
