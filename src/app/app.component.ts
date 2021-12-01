import { Component } from '@angular/core';
import {concat, interval, timer} from 'rxjs';
import {concatMap, flatMap, mapTo, mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'products-manager';

  constructor() {

  }

}
