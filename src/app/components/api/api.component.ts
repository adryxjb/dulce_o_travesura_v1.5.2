import { Component } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "apiComponent",
  templateUrl: "./api.component.html",
  styleUrls: ["./api.component.css"]
})
export class ApiComponent {
  public titulo: string;
  public users: any;

  constructor(private _http: HttpClient, private _router: Router) {
    this.titulo = "Dulce o Travesura";
    this._http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (data) => {
        console.log(data);
        this.users = data;
        console.log("Usuarios: ", this.users);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        console.log(err.message);
      },
      () => {
        console.log("Petición finalizada");
      }
    );
  }

  redirigir(id: string) {
    this._router.navigate(["/usuarios/", id]);
  }
}
