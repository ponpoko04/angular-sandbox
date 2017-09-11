import { Component, OnInit, Input } from '@angular/core';

export interface IMessage {
  title: string;
  description: string;
  links: ILink[];
}
interface ILink {
  title: string;
  url: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() message: IMessage;

  constructor() { }

  ngOnInit() {
  }
}
