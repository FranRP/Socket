import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  nombre: string;
  posibles = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];
  dadouno: any;
  dadodos: any;
  total: any;
  comienzo: string;
  totalgame: any;
  menuadivina: string = 'off';
  reset: string = 'resetearOff';

  titulo: string = 'Debes esperar al resto de jugadores para jugar';

  constructor(private union: ServicioService) {
  }

  ngOnInit() {
    this.nombre = this.union.usuario;
    this.union.getAviso().subscribe(data => {
      this.comienzo = data;
      if (this.comienzo == 'activar') {
        this.titulo = '¡Jugadores listos, ya puedes jugar!'
      }
    });
    this.union.getAdivinanza().subscribe(data => {
      this.totalgame = data.value;
      this.menuadivina = data.estado;
    });
    this.union.getGanadorRonda().subscribe(data => {
      console.log(data);
      if (data[0].user == this.nombre) {
        this.union.sendSumaScore();
      }
    });

    this.union.getReset().subscribe(data => {
      this.reset = data;
      if (this.reset == 'resetearOn') {
        $('.mostrar').hide();
        $('.empezar').attr("disabled", false);
        this.menuadivina = 'off';
        $('.jugando').css("display", 'block');
        $('.espera').css("display", 'none');
      }
    });


  }

  lanzar() {
    this.dadouno = Math.floor((Math.random() * 6) + 1);
    this.dadodos = Math.floor((Math.random() * 6) + 1);
    this.total = this.dadouno + this.dadodos;
    $('.mostrar').show();
    $('.empezar').attr("disabled", true);
    this.union.sendLanzamiento(this.total);
  }

  mostrar() {
    console.log(this.totalgame);
  }

  sendResultado() {
    let resultado = this.totalgame - $('select').val();
    console.log(resultado);
    $('.jugando').css("display", 'none');
    $('.espera').css("display", 'block');
    this.union.sendRespuesta(resultado);
  }

}
