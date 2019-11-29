import { Component, OnInit } from '@angular/core';
import {ProyectosService} from "src/app/services/proyectos.service";
import { Router, ActivatedRoute } from '@angular/router'
import { Proyecto} from 'src/app/models/Proyecto';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})


export class EditProjectComponent implements OnInit {
  id:number;
  project:any=[];

  photoSelected: string | ArrayBuffer;
  file: File;

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      // image preview
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

  constructor(
    private projectService:ProyectosService,
    private router:Router,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.projectService.getOneProject(this.id)
        .subscribe(
          res => {
            this.project = res;
            console.log(this.project);
            
          },
          err => console.log(err)
        )
    });
  }

  updateProject(nombre: HTMLInputElement, objetivos: HTMLTextAreaElement,
    descripcion: HTMLTextAreaElement,compromiso_social: HTMLInputElement,
    videos:HTMLInputElement, costo_minimo:HTMLInputElement,
    costo_optimo:HTMLInputElement,ubicacion:HTMLInputElement){
    this.projectService.updateProject(this.id,nombre.value,objetivos.value,descripcion.value,
      compromiso_social.value,this.file,videos.value,costo_minimo.valueAsNumber,costo_optimo.valueAsNumber,
      ubicacion.value).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/perfil/misproyectos']);
        
      },
      err=>{
        console.log(err);
        
      }
    )
    console.log(this.file);
    
  }
}
