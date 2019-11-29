import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {ProyectosService} from "src/app/services/proyectos.service";
import { from } from 'rxjs';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-registro-proyectos',
  templateUrl: './registro-proyectos.component.html',
  styleUrls: ['./registro-proyectos.component.css']
})
export class RegistroProyectosComponent implements OnInit {
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


  constructor(private projectService:ProyectosService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
  }


  getDate(){
    let n =  new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();
  return y + "/" + m + "/" + d;
 }

  saveProject(nombre: HTMLInputElement, objetivos: HTMLTextAreaElement,
    descripcion: HTMLTextAreaElement,compromiso_social: HTMLInputElement,
    videos:HTMLInputElement, costo_minimo:HTMLInputElement,
    costo_optimo:HTMLInputElement,ubicacion:HTMLInputElement,fecha){
    this.projectService.saveProject(nombre.value,objetivos.value,descripcion.value,
      compromiso_social.value,this.file,videos.value,costo_minimo.valueAsNumber,costo_optimo.valueAsNumber,
      ubicacion.value,fecha=this.getDate()).subscribe(
      res=>{
        console.log(res);
        this.router.navigate(['/perfil/misproyectos']);
        
      },
      err=>{
        console.log(err);
        
      }
    )
    console.log(costo_minimo.valueAsNumber,costo_optimo.valueAsNumber,fecha);
    
  }




}
