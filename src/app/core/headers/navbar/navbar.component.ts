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
  public themes = [
    ThemeEnum.LIGHT,
    ThemeEnum.DARK,
  ]
  public rotateCog: boolean;
  constructor() { }

  ngOnInit() {
  }
  openConfig() {
    this.rotateCog = !this.rotateCog;
  }
  getTheme(){
    return `${this.theme.general} hero-navbar-theme` ;
  }
  updateTheme(newTheme) {
    this.updateThemeEvt.emit(newTheme);
  }
}
