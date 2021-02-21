// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   Component
// } from "@angular/core";

import { Component } from "@angular/core";
import { Producto } from "./producto";

@Component({
  selector: "productosComponent",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"]
})
export class ProductosComponent {
  public titulo: string;
  public producto: Producto;
  public productos: Array<Producto>;

  constructor() {
    this.titulo = "Nuestros Productos";
    this.producto = new Producto("Helado de fresa", 189, "Helados", true);
    this.productos = [
      new Producto("Galletas de chocolate", 175, "Galletas", true),
      new Producto("Pay de manzana", 200, "Pays", true),
      new Producto("Pay de Queso", 210, "Pays", true),
      new Producto("Gelatina de cajeta", 189, "Gelatinas", true),
      new Producto("Flan napolitano", 189, "Flanes", true),
      new Producto("Pastel Imposible", 189, "Pasteles", true),
      new Producto("Panque de nata", 200, "Panques", true),
      new Producto("Pastel de chocolate", 189, "Pasteles", true),
      new Producto("Brownies de chocolate con nuez", 189, "Brownies", true),
      new Producto("Astorgas", 189, "Mantecadas", true),
      new Producto("Galletas de mantequilla", 189, "Galletas", true),
      new Producto("Helado de fresa", 189, "Helados", true),
      new Producto("Helado de cajeta", 189, "Helados", false),
      new Producto("Panque de naranja", 200, "Panques", true)
    ];
  }
}
