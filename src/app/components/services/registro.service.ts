import { Injectable } from "@angular/core";
import { Usuario } from "../registro/usuario";

@Injectable()
export class RegistroService {
  public titulo: string;
  public usuario: Usuario;
  public usuarios = [
    new Usuario("Rosa", "rosa@mail.com", 5),
    new Usuario("Pedro", "pedro@mail.com", 7),
    new Usuario("Maria", "maria@mail.com", 6),
    new Usuario("Roberto", "roberto@mail.com", 3),
    new Usuario("Alejandra", "ale@mail.com", 1)
  ];

  getUsuario(): Array<Usuario> {
    return this.usuarios;
  }

  addUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
    return this.usuarios;
  }
}
