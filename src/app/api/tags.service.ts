import { Tag } from './../interfaces/tag';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private http: HttpClient
  ) { }

  //Obtener etiquetas por nombre
  getTags(name: string = "") {
    let params;
    if (name !== '') {
      params= new HttpParams()
        .set('name', name);
    }
    return this.http.get<Tag[]>(`${environment.apiEndpoint}/tags`, {params});
  }

  //Crear una etiqueta
  createTag(tag: Tag) {
    return this.http.post(`${environment.apiEndpoint}/create_tag`, {
      ... tag
    });
  }

  //Borrar una etiqueta por id
  deleteTag(id: any) {
    return this.http.delete(`${environment.apiEndpoint}/delete_tag?id=${id}`);
  }
}
