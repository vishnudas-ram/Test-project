import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class Websocket {
  private webSocketUrl: string = 'wss://echo.websocket.org';
  private socket$!: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket({
      url: this.webSocketUrl,
      serializer: (val:string)=> val,
      deserializer:(e:MessageEvent)=> e.data 
    });
  }

  public connect():Observable <any>{
    return this.socket$.asObservable();
  }

  public sentMessage(message:string):void {
    this.socket$.next(message);
  }

  public close() {
    this.socket$.complete()
  }
}
