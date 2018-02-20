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
    this.union.getArrayNombres().subscribe(data => {
      this.union.arrayUsers = data;
      console.log('-----------------------------')
      console.log(this.union.arrayUsers);
    });
  }

  acceder() {

    if (this.nickname == "") {
      this.nickname = 'Anónimo';
    }
    this.union.modificaNombre(this.nickname);
    this.nickname = '';
  }

}
