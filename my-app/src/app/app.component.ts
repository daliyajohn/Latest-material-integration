import { Component } from '@angular/core';
import * as _ from 'underscore';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  subtitle = _.head(['xyz'])
}
