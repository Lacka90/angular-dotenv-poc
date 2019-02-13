import { Component } from '@angular/core';
import { convict } from './config/convict';
import { dotenv } from './config/dotenv';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  convict = convict;
  dotenv = dotenv;

  config = this.configService.getConfig();

  constructor(private configService: ConfigService) {}
}
