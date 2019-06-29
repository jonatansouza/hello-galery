import { HeroProviderService } from './../../core/services/hero-provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private heroProvider: HeroProviderService) { }

  ngOnInit() {
    this.heroProvider.getHeroById(1).subscribe(console.log, console.log);
  }

}
