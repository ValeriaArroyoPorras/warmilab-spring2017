import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  nombre: string = "Alexander Wong";
  ocupacion: string = "Software Engineer";
  edad: number = 28;

  datos: any = {
    nombre: "Alexander Wong",
    ocupacion: "Software Engineer",
    edad: 28
  };

  informacion: any[] = [
    {
      titulo: "Origen",
      dato: "Lima, Peru",
      icono: "flag"
    },
    {
      titulo: "E-mail",
      dato: "alwongm@gmail.com",
      icono: "mail"
    },
    {
      titulo: "Telefono",
      dato: "987531800",
      icono: "call"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
