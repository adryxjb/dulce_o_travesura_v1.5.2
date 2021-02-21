// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   Component
// } from "@angular/core";

import { Component } from "@angular/core";

@Component({
  selector: "contactoComponent",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"]
})
export class ContactoComponent {
  public titulo: string;
  public email: string;
  public mensaje: string;

  constructor() {
    this.titulo = "Contactanos";
  }
}
