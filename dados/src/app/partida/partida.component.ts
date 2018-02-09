import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-partida',
  templateUrl: './partida.component.html',
  styleUrls: ['./partida.component.css']
})
export class PartidaComponent implements OnInit {

  constructor(private union: ServicioService) {
  }

  ngOnInit() {
    this.union.getSala().subscribe(data => {
      console.log(data);
    });
  }

}
