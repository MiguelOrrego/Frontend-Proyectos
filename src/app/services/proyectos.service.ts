import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Proyecto} from '../models/Proyecto' 
import { throws } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http:HttpClient) { }

  URI='http://localhost:3200/ms';

  saveProject(nombre:string,
    objetivos:string,
    descripcion:string,
    compromiso_social:string,
    image:File,
    videos:string,
    costo_minimo:number,
    costo_optimo:number,
    ubicacion:string,
    fecha:string){
    const fd = new FormData();
    fd.append('nombre',nombre);
    fd.append('objetivos',objetivos);
    fd.append('compromiso_social',compromiso_social);
    fd.append('descripcion',descripcion);
    fd.append('image',image);
    fd.append('videos',videos);
    fd.append('costo_minimo',costo_minimo.toString());
    fd.append('costo_optimo',costo_optimo.toString());
    fd.append('ubicacion',ubicacion)
    fd.append('fecha',fecha)
    return this.http.post(`${this.URI}/projects`,fd)
  }

  getProjects(){
    return this.http.get(`${this.URI}/projects`)
  }

  getOneProject(id:number){
    return this.http.get<Proyecto>(`${this.URI}/projects/${id}`)
  }

  updateProject(
    id:number,
    nombre:string,
    objetivos:string,
    descripcion:string,
    compromiso_social:string,
    image:File,
    videos:string,
    costo_minimo:number,
    costo_optimo:number,
    ubicacion:string){
      const fd = new FormData();
      fd.append('nombre',nombre);
      fd.append('objetivos',objetivos);
      fd.append('compromiso_social',compromiso_social);
      fd.append('descripcion',descripcion);
      fd.append('image',image);
      fd.append('videos',videos);
      fd.append('costo_minimo',costo_minimo.toString());
      fd.append('costo_optimo',costo_optimo.toString());
      fd.append('ubicacion',ubicacion)
    return this.http.put(`${this.URI}/projects/${id}`,fd)
  }
}
