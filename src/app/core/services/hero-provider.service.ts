import { Hero } from './../../shared/interfaces/hero';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroProviderService {
  private apiUrl: string;
  constructor(private http: HttpClient) {
    this.apiUrl = environment.HERO_API.URL;
  }

  public getHeroById(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.apiUrl}${environment.HERO_API.TOKEN}/${id}`);
  }
}
