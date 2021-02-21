import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { routing, appRoutingProviders } from "./app.routing";
import { HttpClientModule } from "@angular/common/http";

//Importar componentes
import { AppComponent } from "./app.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { ContactoComponent } from "./components/contacto/contacto.component";
import { HomeComponent } from "./components/home/home.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { RegistroComponent } from "./components/registro/registro.component";
import { ApiComponent } from "./components/api/api.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import { RecetasComponent } from "./components/recetas/recetas.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ContactoComponent,
    HomeComponent,
    ProductosComponent,
    RegistroComponent,
    ApiComponent,
    UsuariosComponent,
    RecetasComponent
  ],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule {}
