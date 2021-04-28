import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SkilledsService } from './../../api/skilleds.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TagsService } from 'src/app/api/tags.service';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-skilleds-create-page',
  templateUrl: './skilleds-create-page.component.html',
  styleUrls: ['./skilleds-create-page.component.scss']
})
export class SkilledsCreatePageComponent implements OnInit, OnDestroy {

  //Modelo de expertos
  skilledModel: any = {
    name: '',
    nif: '',
    tags: [],
    availability: '',
    contact_phone: '',
    contact_email: '',
    contact_linkedin: '',
    state: 'pending',
    created_at: new Date()
  }
  //Suscripciones
  createSub: Subscription = new Subscription;
  getTagsSub: Subscription = new Subscription;

  //Listado de etiquetas
  tagsList: Tag[] = [];
  // Setting del multidropdown
  dropdownSettings = {};
  //Array de etiquetas seleccionadas
  selectedTags = [];
  //Etiquetas enviadas al backend sin id
  tagsToBackend: any[] = [];
  constructor(
    private skilledsService: SkilledsService,
    private tagsService: TagsService,
    private router: Router
  ) {
    //Settings del proyecto
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      placeholder: 'Selecciona las etiquetas del experto',
      searchPlaceholderText: 'Buscar',
      textField: 'name',
      selectAllText: 'Seleccionar todas',
      unSelectAllText: 'Deseleccionar todas',
      itemsShowLimit: 200,
      allowSearchFilter: true
    };
  }

  ngOnInit(): void {
    this.getTags();
  }

  // Obtener etiquetas
  getTags() {
    this.getTagsSub = this.tagsService.getTags().subscribe((data: Tag[]) => {
      this.tagsList = data;
    })
  }

  //Enviar formulario
  submit(form: NgForm) {
    //Si formulario es inválido marcar inputs como 'touched'
    if(form.invalid) {
      console.log(form.controls);
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    //Fecha createdat = fecha hoy
    this.skilledModel.created_at = new Date();
    this.skilledModel.state = 'Pdte.Validar';

    //Quitar id a las etiquetas para enviarlas al servicio
    this.tagsToBackend = [];

    this.skilledModel.tags.forEach((tag: any) => {
      this.tagsToBackend.push({
        name: tag.name
      })
    })

    this.skilledModel.tags = this.tagsToBackend;

    //Actualizar servicio
    this.createSub = this.skilledsService.createSkilled(this.skilledModel).subscribe(() => {
      this.router.navigateByUrl('/logged/skilleds');
    });
  }

  //
  // Eventos multiselect
  //
  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
    this.skilledModel.tags = [... items];
  }

  onDeselect(item: any) {
    console.log(item);
  }

  //Eliminar suscripciones
  ngOnDestroy() {
    if (this.createSub) {
      this.createSub.unsubscribe();
    }
    if (this.getTagsSub) {
      this.getTagsSub.unsubscribe();
    }
  }
}
