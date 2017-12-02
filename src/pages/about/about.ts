import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {

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
    }, {
      titulo: "Hobby",
      dato: "montar bicicleta",
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
