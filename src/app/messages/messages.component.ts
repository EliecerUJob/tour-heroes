import { Component, inject } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  messageService = inject(MessageService);

}
