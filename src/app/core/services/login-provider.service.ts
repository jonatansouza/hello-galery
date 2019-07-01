import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginProviderService {
  private user;
  constructor(private auth: AngularFireAuth,
              private router: Router) {
    this.auth.user.subscribe((user) => {
      this.user = user;
    })
  }

  public isLoggedIn() {
    return this.auth.user;
  }
  public getUser(){
    return this.auth.user;
  }

  public loginWithGoogle(): void{
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  public loginWithFacebook(): void {
    this.auth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  public handleLogin(){
    this.router.navigate([""])
  }
}
