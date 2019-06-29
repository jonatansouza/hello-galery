import { Hero } from './../../shared/interfaces/hero';
import { HeroProviderService } from './../../core/services/hero-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private heroes: Hero[] = [];
  constructor(private heroProvider: HeroProviderService) { }

  ngOnInit() {
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
    setTimeout(() => {
      this.heroProvider.getHeroById(t()).subscribe((hero) => {
        this.heroes.push(hero);
      }, console.log);
      this.heroProvider.getHeroById(t()).subscribe((hero) => {
        this.heroes.push(hero);
      }, console.log);
      this.heroProvider.getHeroById(t()).subscribe((hero) => {
        this.heroes.push(hero);
      }, console.log);
      }, 5000)
  }

}
