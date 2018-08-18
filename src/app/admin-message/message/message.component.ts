import { Component, OnInit } from '@angular/core';
import { MessagingService } from '../../service/messaging.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: [ './message.component.scss' ],
})
export class MessageComponent {
  message: string;
  user: any;

  constructor(private messagingService: MessagingService) { }

  onSubmit() {
    this.messagingService.sendMessage(this.message);
    this.message = '';
  }

}
