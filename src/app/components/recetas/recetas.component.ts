import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { RecetaService } from "../services/receta.service";
import { Receta } from "./receta";

@Component({
  selector: "recetasComponent",
  templateUrl: "./recetas.component.html",
  styleUrls: ["./recetas.component.css"]
})
export class RecetasComponent implements OnInit {
  public titulo: string;
  public parametro;
  public receta: Receta;

  constructor(
    private _recetaService: RecetaService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = "Recetas";
  }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.parametro = params["id"];
    });
    //console.log("Parametro: ", this.parametro);
    this.getReceta(this.parametro);
  }

  getReceta(id: string) {
    this.receta = null;
    this._recetaService.getReceta(id).subscribe(
      (recetaFromAPI) => {
        console.log("recetaFromAPI: ", recetaFromAPI);
        this.receta = recetaFromAPI;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  buscarReceta(tema) {
    this.getReceta(tema);
  }
}
