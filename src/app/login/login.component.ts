import { GlobalSettingsService } from './../core/services/global-settings.service';
import { Theme } from 'src/app/shared/interfaces/theme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public theme: Theme;
  constructor(private globalSettings: GlobalSettingsService) { }

  ngOnInit() {
    this.theme = this.globalSettings.getTheme();
    this.globalSettings.getThemeChanges().subscribe((t) => this.theme = t);
  }

}
