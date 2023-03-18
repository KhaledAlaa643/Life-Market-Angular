import { Component } from '@angular/core';
import { Message } from 'src/app/Models/message';
import { MessageService } from 'src/app/Services/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  mess: Message = {} as Message;

  constructor(private _messageServ:MessageService){}

  sendMessage(){
    this._messageServ.saveNewMessage(this.mess).subscribe({
      next:(res)=>{
        Swal.fire({
          icon: 'success',
          text: 'Thanks For Your Message',
          showConfirmButton: false,
          timer: 1500
        }).then(()=>{
          window.location.reload();
        });
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong, '+err,
        })
      }
    });
  }

}
