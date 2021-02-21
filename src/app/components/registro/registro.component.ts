import { Component, OnInit } from "@angular/core";
import { RegistroService } from "../services/registro.service";
import { Usuario } from "./usuario";

@Component({
  selector: "registroComponent",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
  providers: [RegistroService]
})
export class RegistroComponent implements OnInit {
  public titulo: string;
  public usuario: Usuario;
  public usuarios: Array<Usuario>;

  constructor(private _registroService: RegistroService) {
    this.titulo = "Registro";
  }

  ngOnInit() {
    this.titulo = "Registrate";
    this.usuarios = this._registroService.getUsuario();
    console.log("this.usuarios: ", this.usuarios);
  }

  guardarUsuario(nombre: string, mail: string, edad: number) {
    this.usuario = new Usuario(nombre, mail, edad);
    this._registroService.addUsuario(this.usuario);
    this.usuario = null;
  }
}
