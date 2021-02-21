import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Receta } from "../recetas/receta";

@Injectable({ providedIn: "root" })
export class RecetaService {
  public baseUrl = environment.apiUrl + "?query=";
  public uk: string;

  constructor(private _http: HttpClient) {
    console.log(this.baseUrl);
  }

  getReceta(tema: string): Observable<Receta> {
    this.uk = "&apiKey=a0d15af971484620948fb5642367dc5e";
    const url = this.baseUrl + tema + this.uk;
    return this._http.get<Receta>(url);
  }
}
