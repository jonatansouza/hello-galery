import { Injectable, EventEmitter } from '@angular/core';
import { Theme } from 'src/app/shared/interfaces/theme';
import { ThemeEnum } from 'src/app/shared/constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalSettingsService {
  private theme$ = new EventEmitter<Theme>();
  private theme: Theme;
  private lightTheme = <Theme> {
    general: "theme-light",
    navbar: "theme-light-navbar",
    card: "theme-light-card",
    buttons: "theme-light-buttons",
  }
  private darkTheme = <Theme> {
    general: "theme-dark",
    navbar: "theme-dark-navbar",
    card: "theme-dark-card",
    buttons: "theme-dark-buttons",
  }

  constructor() { 
    this.theme = this.lightTheme;
  }
  public getThemeChanges():Observable<Theme> {
    return this.theme$;
  }
  public getTheme(): Theme {
    return this.theme;
  }
  public setTheme(theme: ThemeEnum) {
    switch(theme) {
      case ThemeEnum.DARK: 
        this.theme$.emit(this.darkTheme);
        this.theme = this.darkTheme;
        break;
      default: 
        this.theme$.emit(this.lightTheme);
        this.theme = this.lightTheme;
        break;
    }
  }
}
