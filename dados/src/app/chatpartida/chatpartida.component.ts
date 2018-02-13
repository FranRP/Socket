import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-chatpartida',
  templateUrl: './chatpartida.component.html',
  styleUrls: ['./chatpartida.component.css']
})
export class ChatpartidaComponent implements OnInit {
  listaUsers = [];
  message: string;
  arrayMensajes = [];

  constructor(private union: ServicioService) {
  }

  ngOnInit() {
    this.union.getSala().subscribe(data => {
      this.listaUsers = data.usuario;
    });
    this.union.getMensajeSala().subscribe(data => {
      this.arrayMensajes.push(data);
    });
  }

  sendMessage() {
    console.log(this.arrayMensajes);
    this.union.sendMensajeSala(this.message);
    this.message = '';
  }

}
