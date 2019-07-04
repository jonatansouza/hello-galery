import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Input() label: string = ""
  constructor() { }

  ngOnInit() {
  }

}
