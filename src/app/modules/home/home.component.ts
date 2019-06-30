import { GlobalSettingsService } from './../../core/services/global-settings.service';
import { Hero } from './../../shared/interfaces/hero';
import { HeroProviderService } from './../../core/services/hero-provider.service';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/shared/interfaces/theme';

@Component({
  selector: 'hero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private heroes: Hero[] = [];
  private theme: Theme;
  constructor(
    private heroProvider: HeroProviderService,
    private globalSettings: GlobalSettingsService  
  ) { }

  ngOnInit() {
    this.theme = this.globalSettings.getTheme();
    this.globalSettings.getThemeChanges()
      .subscribe((t) => this.theme = t);
    const t = () => Math.floor(Math.random() * 731) + 1
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
    this.heroProvider.getHeroById(t()).subscribe((hero) => {
      this.heroes.push(hero);
    }, console.log);
  }
}
