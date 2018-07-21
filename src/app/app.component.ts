import { Component } from '@angular/core';
import { convict, dotenv } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  convict = convict;
  dotenv = dotenv;
}
