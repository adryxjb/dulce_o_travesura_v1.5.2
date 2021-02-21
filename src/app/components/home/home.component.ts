import { Component } from "@angular/core";

@Component({
  selector: "homeComponent",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent {
  public titulo: string;

  constructor() {
    this.titulo = "Dulce o Travesura";
  }
}
