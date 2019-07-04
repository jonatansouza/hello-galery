import { HeroProviderService } from './hero-provider.service';
import { LoginProviderService } from './login-provider.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageProviderService {
  private root = "users";
  private document;
  constructor(private firestore: AngularFirestore,
    private loginProvider: LoginProviderService,
    private heroProvider: HeroProviderService) {

  }
  public getUserPreference(): Observable<any> {
    const id = this.loginProvider.getUserId();
    return this.firestore.doc(`${this.root}/${id}`).valueChanges();
  }
  getUserFavorites(): Observable<string[]> {
    const id = this.loginProvider.getUserId();
    return this.firestore.doc(`${this.root}/${id}`)
        .valueChanges().pipe(map((response:any) => {
          return response ? response.favorites : []
        }));
  }
  fetchUserFavoritesHeros(): Observable<string[]> {
    const id = this.loginProvider.getUserId();
    return this.firestore.doc(`${this.root}/${id}`)
        .valueChanges().pipe(map((response:any) => {
          return response ? response.favorites : []
        }), take(1));
  }
  updateUserFavorites(favorites) {
    const id = this.loginProvider.getUserId();
    return this.firestore.doc(`${this.root}/${id}`).set({
      favorites
    });
  }
}
