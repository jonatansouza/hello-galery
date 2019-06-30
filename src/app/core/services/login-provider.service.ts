import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginProviderService {

  constructor(private auth: AngularFireAuth) {
  }

  public isLoggedIn(){
    return this.auth.user;
  }

  public loginWithGoogle(): void{
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  public loginWithFacebook(): void {
    this.auth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
}
