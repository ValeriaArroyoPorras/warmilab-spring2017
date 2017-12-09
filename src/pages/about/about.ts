import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

  nombre: string = "Valeria Arroyo";
  ocupacion: string = "Estudiante";
  edad: number = 13;

  datos: any = {
    nombre: "Valeria Arroyo",
    ocupacion: "Estudiante",
    edad: 13
  };

  informacion: any[] = [
    {
      titulo: "Origen",
      dato: "Lima, Peru",
      icono: "flag"
    },
    {
      titulo: "E-mail",
      dato: "vmarroyoporras@gmail.com",
      icono: "mail"
    },
    {
      titulo: "Telefono",
      dato: "946587822",
      icono: "call"
    }, {
      titulo: "Hobby",
      dato: "patinar",
      icono: "alarm"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.agregarDato("Cantante favorito", "Ed Sheeran");
    this.agregarDato("Colegio", "Innova Schools");
  }

  agregarDato(nuevoTitulo: string, nuevoDato: string) {
    this.informacion.push({
      titulo: nuevoTitulo,
      dato: nuevoDato,
      icono: "heart"
    });
  }














}
