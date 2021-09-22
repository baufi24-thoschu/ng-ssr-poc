import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-ssr-poc-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstComponent implements OnInit {

  // constructor() {}

  ngOnInit(): void {
    console.log('###');
  }
}
