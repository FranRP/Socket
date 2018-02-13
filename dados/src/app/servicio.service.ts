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

  public sendMensajeSala(message) {
    this.socket.emit('mensaje-sala', message);
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

  sendUsuarioGame() {
    this.socket.emit('usuarioInGame');
  }

  public sendUsuario(user) {
    this.socket.emit('nuevousuario', user);
  }

  public sendLanzamiento(valor) {
    this.socket.emit('lanzardados', valor);
  }

  public sendRespuesta(valor) {
    this.socket.emit('respuesta', valor);
  }

  public sendSumaScore() {
    this.socket.emit('sumarScore');
  }

  public getMessage(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('mensajechat', (message) => {
        observer.next(message);
        console.log(message);
      });
    });
  }

  public getReset(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('resetear-ronda', (activador) => {
        observer.next(activador);
      });
    });
  }

  public getGanadorRonda(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('ganador-ronda', (objeto) => {
        observer.next(objeto);
      });
    });
  }

  public getAdivinanza(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('valor-adivinar', (valor) => {
        observer.next(valor);
      });
    });
  }

  public getMensajeSala(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('mensaje-chat', (message) => {
        observer.next(message);
        console.log(message);
      });
    });
  }

  public getAviso(): Observable<any> {
    return Observable.create((observer) => {
      this.socket.on('comienza', (dato) => {
        observer.next(dato);
        console.log(dato);
      })
    })
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