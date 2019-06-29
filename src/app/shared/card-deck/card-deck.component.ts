import { Hero } from './../interfaces/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-card-deck',
  templateUrl: './card-deck.component.html',
  styleUrls: ['./card-deck.component.scss']
})
export class CardDeckComponent implements OnInit {
  @Input() heroes: Hero[] = []
  constructor() { }

  ngOnInit() {
  }

}
