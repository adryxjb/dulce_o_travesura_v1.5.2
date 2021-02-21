import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UsuarioService } from "../services/user.service";
import { Usuario } from "./usuario";

@Component({
  selector: "usuariosComponent",
  templateUrl: "./usuarios.component.html",
  styleUrls: ["./usuarios.component.css"]
})
export class UsuariosComponent implements OnInit {
  public titulo: string;
  public parametro;
  public user: Usuario;

  constructor(
    private _usuarioService: UsuarioService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = "Usuarios";
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params["id"];
    });
    console.log("Parametro: ", this.parametro);
    this.getUser(this.parametro);
  }

  getUser(userid: string) {
    this.user = null;
    this._usuarioService.getUser(userid).subscribe(
      (userFromAPI) => {
        console.log("userFromAPI: ", userFromAPI);
        this.user = userFromAPI;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
