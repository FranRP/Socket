import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  nickname: string = "";

  constructor(private union: ServicioService) {
  }

  ngOnInit() {
  }

  acceder() {

    if (this.nickname == "") {
      this.nickname = 'Anónimo';
    }
    this.union.usuario = this.nickname;
    this.nickname = '';
  }

}
