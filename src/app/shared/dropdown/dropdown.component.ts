import { Hero } from './../interfaces/hero';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() label: String;
  @Input() heroes: Hero[] = [];
  private toggleDropdown: boolean;
  constructor() { }

  ngOnInit() {
  }
  getDropdownIcon() {
    if(!this.toggleDropdown){
      return "down"
    }
    return "up" 
  }
  openDropdown() {
    this.toggleDropdown = !this.toggleDropdown;
  }
}
