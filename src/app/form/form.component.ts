import { Component, OnInit } from '@angular/core';

import { checkedSubject } from '../helpers/app.helpers';
import { PushService } from '../service/push.service';
import { MessagingService } from '../service/messaging.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ],
})
export class FormComponent implements OnInit {


  color: string = 'accent';
  checked: boolean = false;
  disabled: boolean = false;
  status: string = 'not';

  constructor(private pushService: PushService) { }

  ngOnInit() {
    checkedSubject.subscribe((payload) => {
      this.checked = payload;
      this.status = (this.checked) ? '' : 'not';
    });
  }

  onToggle(event) {
    this.status = (event.checked) ? '' : 'not';
    console.log('checked:', event.checked);

    if (event.checked) {
      this.pushService.addSubscriber();
    } else {
      this.pushService.removeSubscriber();
    }
  }


}
