import { Skilled } from './../interfaces/skilled';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkilledsService {

  constructor(
    private http: HttpClient
  ) { }

  //Obtener los expertos por nombre, estado y valoración
  getSkilleds(name: string = '', state: string = 'todos', score: string = '') {
    if (state === 'todos') {
      state = ''
    }
    let params
    if (name !== '') {
      params = new HttpParams()
      .set('name', name)
    } else if(state !== '') {
      params = new HttpParams()
      .set('state', state)
    } else if (score !== '') {
      params = new HttpParams()
      .set('score', score)
    }
    return this.http.get<Skilled[]>(`${environment.apiEndpoint}/skilled`, {params});
  }

  getSkilled(id: number) {
    return this.http.get<Skilled>(`${environment.apiEndpoint}/skilled_id?id=${id}`);
  }

  //Crear un experto
  createSkilled(skilled: Skilled) {
    return this.http.post(`${environment.apiEndpoint}/create_skilled`, {
      ... skilled
    })
  }

  //Editar un experto por id
  editSkilled(id: any, skilled: Skilled) {
    return this.http.put(`${environment.apiEndpoint}/update_skilled?id=${id}`, {
      ... skilled
    })
  }

}
