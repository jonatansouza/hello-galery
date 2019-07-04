import { Observable } from 'rxjs';
import { LoginProviderService } from './../../services/login-provider.service';
import { Theme } from './../../../shared/interfaces/theme';
import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { ThemeEnum } from 'src/app/shared/constants';

@Component({
  selector: 'hero-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() theme: Theme;
  @Output() updateThemeEvt = new EventEmitter<ThemeEnum>();
  public user$: Observable<firebase.User>;
  public themes = [
    ThemeEnum.LIGHT,
    ThemeEnum.DARK,
  ]
  public rotateCog: boolean;
  public isOpenUserMenu: boolean;
  constructor(private loginProvider: LoginProviderService) {
    this.user$ = this.loginProvider.getUser()
  }

  ngOnInit() {
  }
  openConfig() {
    this.rotateCog = !this.rotateCog;
    if(this.isOpenUserMenu){
      this.isOpenUserMenu = false;
    }
  }
  getTheme(){
    return `${this.theme.general} hero-navbar-theme` ;
  }
  updateTheme(newTheme) {
    this.updateThemeEvt.emit(newTheme);
    this.rotateCog = !this.rotateCog;
  }
  openUserMenu(){
    this.isOpenUserMenu = !this.isOpenUserMenu;
    if(this.rotateCog){
      this.rotateCog = false;
    }
  }
  logout() {
    this.loginProvider.signOut();
    this.isOpenUserMenu = !this.isOpenUserMenu
  }
}
