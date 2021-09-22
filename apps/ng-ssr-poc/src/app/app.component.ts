import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'ng-ssr-poc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-ssr-poc';

  constructor(private readonly appService: AppService) {
    console.log(appService.getWindow());
    console.log(appService.getBody());
    console.log(appService.getLocation().host);
  }
}
