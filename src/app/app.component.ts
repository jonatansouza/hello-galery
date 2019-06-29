import { Component } from '@angular/core';

@Component({
  selector: 'hero-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private theme = "theme-light";
  title = 'hero-gallery';
}
