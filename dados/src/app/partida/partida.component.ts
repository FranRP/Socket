import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {
  sala: string;
  name: string;

  constructor(private union: ServicioService) {
  }

  ngOnInit() {
    this.union.getSala().subscribe(data => {
      this.sala = data.sala;
    });
    this.name = this.union.usuario;

  }

}
