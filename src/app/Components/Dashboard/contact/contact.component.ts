import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/Models/message';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  mess: Message[] = [];

  constructor(private _messageServ:MessageService){}
  
  ngOnInit(): void {
    this._messageServ.getAllMessages().subscribe({
      next: (res) => {
        this.mess = res;
        console.log(res);

      }
    });
  }

}
