import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroProyectosComponent } from './registro-proyectos/registro-proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoProyectosComponent } from './listado-proyectos/listado-proyectos.component';
import { ProyectosService } from './services/proyectos.service';
import { HttpClientModule } from '@angular/common/http';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroProyectosComponent,
    FooterComponent,
    ListadoProyectosComponent,
    EditProjectComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  ],
  providers: [
    ProyectosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
