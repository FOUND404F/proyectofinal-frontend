import { Router } from '@angular/router';
import { Skilled } from './../../interfaces/skilled';
import { Subscription } from 'rxjs';
import { SkilledsService } from './../../api/skilleds.service';
import { Option } from './../../interfaces/option';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-skilleds-page',
  templateUrl: './skilleds-page.component.html',
  styleUrls: ['./skilleds-page.component.scss']
})
export class SkilledsPageComponent implements OnInit, OnDestroy {
  //Opciones del 'options'
  optionsState: Option[];
  //Estado seleccionado
  selectedState: string;
  //Suscripciones
  getSkilledsSub: Subscription = new Subscription;
  //Array de expertos
  skilleds: Skilled[] = [];
  //Array para mostrar la valoración en el select de filtros
  scores = Array(100);
  //Modelo de los filtros
  filters = {
    name : '',
    state: 'todos',
    score: ''
  }
  constructor(
    private skilledsService: SkilledsService,
    private router: Router
  ) {
    //Estado 'options' del estado
    this.optionsState = [
      {
        value: 'Pdte.Validar',
        text: 'Pdte. de Verificar'
      },
      {
        value: 'Validado',
        text: 'Validado'
      },
      {
        value: 'todos',
        text: 'Todos'
      },
    ]
    this.selectedState = 'all';

    //Crear valores para el select
    this.scores = Array.from({length: 100}, (v, i) => i);

  }

  ngOnInit(): void {
    this.getSkilleds();
  }

  //Obtener expertos filtrando el nombre, estado y valoración
  getSkilleds() {
    this.getSkilledsSub = this.skilledsService.getSkilleds(this.filters.name, this.filters.state, this.filters.score).subscribe((data: Skilled[]) => {
      this.skilleds = data;
      console.log(data);
    });
  }

  //Redireccionar a página de editar
  goToEdit(id: any) {
    this.router.navigateByUrl(`/logged/skilleds/${id}/edit`);
  }

  //Evento cambiar nombre
  nameChanged(event) {
    this.filters.state = "todos";
    this.filters.name = event.target.value;
    this.filters.score = "";
    this.getSkilleds();
  }

  //Evento cambiar estado
  stateChanged(value) {
    this.filters.state = value;
    this.filters.name = "";
    this.filters.score = "";
    this.getSkilleds();
  }

  //Evento cambiar valoración
  scoreChanged(event) {
    this.filters.state = "todos";
    this.filters.name = "";
    this.filters.score = event.target.value;
    this.getSkilleds();
  }

  //Eliminar suscripción
  ngOnDestroy() {
    if (this.getSkilledsSub) {
      this.getSkilledsSub.unsubscribe();
    }
  }
}
