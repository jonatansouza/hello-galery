import { LoginProviderService } from './login-provider.service';
import { UserPreference } from './../../shared/interfaces/user-preference';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageProviderService {
  private root = "users";
  private document;
  constructor(private firestore: AngularFirestore,
    private loginProvider: LoginProviderService) {

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
  updateUserFavorites(favorites) {
    const id = this.loginProvider.getUserId();
    return this.firestore.doc(`${this.root}/${id}`).set({
      favorites
    });
  }
}
