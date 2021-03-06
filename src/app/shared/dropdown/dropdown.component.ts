import { GlobalSettingsService } from './../../core/services/global-settings.service';
import { Hero } from './../interfaces/hero';
import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../interfaces/theme';

@Component({
  selector: 'hero-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input() label: String;
  @Input() heroes: Hero[] = [];
  @Input() theme: Theme;
  @Input() emptyContent: any = {};
  @Input() startClosed: boolean;
  @Input() loading: boolean;
  public toggleDropdown: boolean;
  constructor(private globalSettings: GlobalSettingsService) { }

  ngOnInit() {
    if(this.startClosed) {
      this.toggleDropdown = true;
    }
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
