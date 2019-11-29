import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListadoProyectosComponent} from './listado-proyectos/listado-proyectos.component';
import { from } from 'rxjs';
import { RegistroProyectosComponent } from './registro-proyectos/registro-proyectos.component';
import {EditProjectComponent} from './edit-project/edit-project.component';
import {SidebarComponent} from './sidebar/sidebar.component';

const routes: Routes = [
{path:'formproyectos',component:RegistroProyectosComponent},
{ path:'formproyectos/edit/:id',component:EditProjectComponent},
{ path:'perfil',component:SidebarComponent,
  children:[
    {path:'misproyectos',component:ListadoProyectosComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
