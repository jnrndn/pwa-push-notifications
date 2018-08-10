import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../service/messaging.service';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: [ './admin-message.component.scss' ],
})
export class AdminMessageComponent implements OnInit {

  message: string;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.messagingService.sendMessage(this.message);
    this.message = '';
  }

}
