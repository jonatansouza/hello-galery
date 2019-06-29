import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() theme: String;
  constructor() { }

  ngOnInit() {
  }

}
