import {Component, OnInit} from '@angular/core';
import {ServicioService} from "../servicio.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  arrayUsers = [];

  constructor(private union: ServicioService) {
  }

  ngOnInit() {
    this.union.getUsuarios().subscribe(data => {
      this.arrayUsers = (data);
    });
  }

  prueba() {
    console.log(this.arrayUsers);
  }


}