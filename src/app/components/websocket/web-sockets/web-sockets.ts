import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Websocket } from '../../../services/websocket/websocket';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-web-sockets',
  imports: [FormsModule],
  templateUrl: './web-sockets.html',
  styleUrl: './web-sockets.css',
})
export class WebSockets implements OnInit {
  socketService = inject(Websocket);
  messageText= signal<string>('');
  responseMessage = signal<string>('');
  destroy = inject(DestroyRef);
  timeOutId:any;

  ngOnInit(): void {
    this.socketService.connect().subscribe({
      next:(res:any)=> {
        this.responseMessage.set(res);
      },
      error:(err:any)=> {}
    })

    this.destroy.onDestroy(()=> {
      this.socketService.close();
     if (this.timeOutId) {
      clearTimeout(this.timeOutId);
     }
    })
  }
 
  sendMessage() {
    this.timeOutId = setTimeout(() => {
      this.socketService.sentMessage(this.messageText());
    }, 2000);
  }

}
