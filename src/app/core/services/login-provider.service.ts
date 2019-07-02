import { Router } from '@angular/router';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginProviderService {
  private currentUser;
  constructor(private angularFireAuth: AngularFireAuth,
              private router: Router) {
    this.angularFireAuth.user.subscribe((user) => {
      this.currentUser = user;
    })
  }

  public isLoggedIn():Observable<boolean>{
    return this.angularFireAuth.authState.pipe(map((response) => !!response), tap((response) => {
      console.log(response, " => user loggedIn");
    }))
  }
  public getUser(){
    return this.angularFireAuth.user;
  }
  public getUserId() {
    return this.currentUser.email;
  }
  public loginWithGoogle(): void{
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  public loginWithFacebook(): void {
    this.angularFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }
  public handleLogin(){
    this.router.navigate([""])
  }
  public signOut() {
    this.angularFireAuth.auth.signOut().finally(() => {
      this.currentUser = undefined
      this.router.navigate([""])   
    });
  }
}
