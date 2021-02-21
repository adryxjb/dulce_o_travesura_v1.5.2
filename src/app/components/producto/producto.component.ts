import { Component } from "@angular/core";
// import { Producto } from "./producto";

@Component({
  selector: "productoComponent",
  templateUrl: "./producto.component.html",
  styleUrls: ["./producto.component.css"]
})
export class ProductoComponent {
  public titulo: string;
  // public producto: Producto;

  constructor() {
    this.titulo = "Producto";
    // this.producto = new Producto("Helado de fresa", 189, "Helados", true);
  }
}
