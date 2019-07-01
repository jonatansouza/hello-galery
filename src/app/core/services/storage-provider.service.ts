import { LoginProviderService } from './login-provider.service';
import { UserPreference } from './../../shared/interfaces/user-preference';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageProviderService {
  private root = "users";
  private document;
  constructor(private firestore: AngularFirestore,
    private loginProvider: LoginProviderService) {
      
  }
  public getUserPreference(): any {
    const id = this.loginProvider.getUserId();
    if (id) {
      return this.firestore.doc(`${this.root}/${id}`).valueChanges();
    }
  }
}
