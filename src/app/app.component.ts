import { Component, HostListener, OnInit } from '@angular/core';
import { PushService } from './service/push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent implements OnInit {

  @HostListener('window:beforeinstallprompt')
  addToHomeScreen(ev) {
    console.log(ev);
  }


  constructor(private pushService: PushService) {  }

  ngOnInit() {
    this.pushService.showMessage();
  }
}

