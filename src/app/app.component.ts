import { Component } from '@angular/core';
import { PushService } from './service/push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {

  constructor(private pushService: PushService) {
    this.pushService.addSubscriber();
  }

}
