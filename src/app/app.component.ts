import { GlobalSettingsService } from './core/services/global-settings.service';
import { Component } from '@angular/core';
import { Theme } from './shared/interfaces/theme';
import { ThemeEnum } from './shared/constants';

@Component({
  selector: 'hero-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public theme: Theme;
  constructor(private globalSettings: GlobalSettingsService){

  }
  ngOnInit(): void {
    this.theme = this.globalSettings.getTheme();
    this.globalSettings.getThemeChanges().subscribe((t) => this.theme = t)
  }
  public updateTheme(evt){
    this.globalSettings.setTheme(evt);
  }
}
