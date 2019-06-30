import { GlobalSettingsService } from './../../core/services/global-settings.service';
import { Hero } from './../interfaces/hero';
import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../interfaces/theme';

@Component({
  selector: 'hero-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  @Input() heroes: Hero[] = []
  private theme: Theme;
  constructor(private globalSettings: GlobalSettingsService) { }

  ngOnInit() {
    this.theme = this.globalSettings.getTheme();
    this.globalSettings.getThemeChanges()
      .subscribe((t) => this.theme = t);
  }
}
