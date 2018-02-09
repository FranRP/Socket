import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ServicioService {
  private url = 'http://localhost:3000';
  private socket;
  public usuario;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  getSala(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('conectarSala', (data) => {
        observer.next(data);
      });
    });
  }

  sendPartida() {
    this.socket.emit('nuevapartida');
  }

  public sendUsuario(user) {
    this.socket.emit('nuevousuario', user);
  }

  public getMessage(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('mensajechat', (message) => {
        observer.next(message);
        console.log(message);
      });
    });
  }

  public getUsuarios(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('usuarios', (users) => {
        observer.next(users);
        console.log(users);
      });
    });
  }


}
