import { Component, OnInit,HostBinding } from '@angular/core';
import { ProyectosService } from '../services/proyectos.service';
import {Router} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-listado-proyectos',
  templateUrl: './listado-proyectos.component.html',
  styleUrls: ['./listado-proyectos.component.css']
})
export class ListadoProyectosComponent implements OnInit {
  @HostBinding('class') classes='row';

  constructor(private projectsService:ProyectosService,private router:Router) { }

  project:any=[];

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.projectsService.getProjects().subscribe(
      res=>{
        this.project=res;
        console.log(this.project);
        
      },
      err=>{
        console.log(err);
        
      }
    )    
    }

  selectProject(id:number){
    this.router.navigate(['/formproyectos',id])
  }

}
