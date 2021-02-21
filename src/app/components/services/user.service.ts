import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../usuarios/usuario";

@Injectable({ providedIn: "root" })
export class UsuarioService {
  public baseUrl = environment.apiUrl + "users/";

  constructor(private _http: HttpClient) {
    console.log(this.baseUrl);
  }

  getUser(userId: string): Observable<Usuario> {
    const url = this.baseUrl + userId;
    return this._http.get<Usuario>(url);
  }
}
