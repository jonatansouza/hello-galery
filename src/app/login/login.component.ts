import { LoginProviderService } from './../core/services/login-provider.service';
import { GlobalSettingsService } from './../core/services/global-settings.service';
import { Theme } from 'src/app/shared/interfaces/theme';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'hero-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public theme: Theme;
  public loading: boolean;
  public userLogged: boolean;
  public user: any;
  constructor(private globalSettings: GlobalSettingsService, 
              public loginProvider: LoginProviderService,
              public router:Router ) { }

  ngOnInit() {
    this.loading = true;
    this.theme = this.globalSettings.getTheme();
    this.globalSettings.getThemeChanges().subscribe((t) => this.theme = t);
    this.loginProvider.getUser().subscribe(r => {
      this.loading = false;
      this.userLogged = !!r;
      this.user = r;
    })
  }

  public loginWithGoogle(){
    this.loginProvider.loginWithGoogle();
  }
  public loginWithFacebook() {
    this.loginProvider.loginWithFacebook();
  }
  public getUserName(){
    return this.user.displayName;
  }
  public goToHome(){
    this.router.navigate(["home"])
  }
}
