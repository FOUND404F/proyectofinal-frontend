import { TagsService } from './../../api/tags.service';
import { Option } from './../../interfaces/option';
import { Skilled } from './../../interfaces/skilled';
import { SkilledsService } from './../../api/skilleds.service';
import { Subscription } from 'rxjs';
import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tag } from 'src/app/interfaces/tag';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-skilled-edit-page',
  templateUrl: './skilled-edit-page.component.html',
  styleUrls: ['./skilled-edit-page.component.scss']
})
export class SkilledEditPageComponent implements OnInit, OnDestroy {
  @ViewChild('nameInput') nameInput;
  @ViewChild('editForm') form;

  // Suscripciones
  routerSub: Subscription = new Subscription;
  getSkilledSub: Subscription = new Subscription;
  getTagsSub: Subscription = new Subscription;
  editSub: Subscription = new Subscription;

  //ID experto
  skilledId: number = 0;
  //Modelo del experto
  skilled: Skilled;
  //Estados de experto
  dropdownListState: Option[];

  //Lista de etiquetas
  tagList: Tag[] = [];
  //Etiquetas seleccionadas
  selectedTags = [];
  //Setting multi dropdown
  dropdownSettings = {};

  //Campo nombre vacio
  nameIsEmpty = false;

  //Nombre del avatar
  nameImageCircle;
  constructor(
    private route: ActivatedRoute,
    private skilledsService: SkilledsService,
    private tagsService: TagsService,
    private toastr: ToastrService
  ) {
    //Estados del dropdownState
    this.dropdownListState = [
      {
        value: 'Validado',
        text: 'Validado'
      },
      {
        value: 'Pdte.Validar',
        text: 'Pendiente de Validar'
      }
    ]
    // Settings del multidropdown
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
    //Obtener parámetros de ruta
    this.routerSub = this.route.params.subscribe(params => {
      this.skilledId = params['id'];
      this.getSkilled();
      this.getTags();
    });
  }

  //Obtener experto
  getSkilled() {
    this.getSkilledSub = this.skilledsService.getSkilled(this.skilledId).subscribe((data: Skilled) => {
      this.skilled = data;

      //Si observations es 'null' dejar campo vacio
      if (this.skilled.observations === 'null') {
        this.skilled.observations = '';
      }
      this.nameImageCircle = this.getUserNameCircle();
    })
  }

  //Obtener nombre avatar
  getUserNameCircle() {
    const name = this.skilled.name;
    //Separar el nombre por espacios
    const nameParts = this.skilled.name.split(" ");
    //Si longitud mayor que dos mostrar primera y segunda letra
    if (nameParts.length >= 2 && nameParts[1][0]) {
      return `${nameParts[0][0]}${nameParts[1][0]}`;
    } else {
      //Mostrar primera letra
      return `${nameParts[0][0] || ''}`;
    }

  }

  //Obtener las etiquetas
  getTags() {
    this.getTagsSub = this.tagsService.getTags().subscribe((data: Tag[]) => {
      this.tagList = data;
    })
  }

  //Evento cambio estado
  stateChanged(event: string) {
    this.skilled.state = event;
    //Enviar formulario
    this.submit();
  }

  //
  // Eventos multi dropdown
  //
  onItemSelect(item: any) {
    this.submit();
  }

  onSelectAll(items: any) {
    this.skilled.tags = [... items];
    this.submit();
  }

  onDeselect(item: any) {
    this.submit();
  }

  //Evento blur del nombre
  nameInputBlur() {
    if (!this.skilled.name) {
      this.nameIsEmpty = true;
    } else {
      this.nameIsEmpty = false;
      //Obtener nombre para el avatar
      this.nameImageCircle = this.getUserNameCircle();
      //Enviar formulario
      this.submit();
    }
  }

  //Click en el error de campo nombre
  errorNameClick() {
    this.nameIsEmpty = false;
    setTimeout(() => {
      this.nameInput?.nativeElement.focus();
    }, 1);
  }

  //Enviar formulario
  submit() {
    if(this.form.invalid) {
      //Marcar campos como touched para mostrar validaciones
      Object.keys(this.form.controls).forEach(key => {
        this.form.controls[key].markAsTouched();
      });
      //Mostrar Toast
      this.toastr.error('El formulario es incorrecto', 'Error', {
        positionClass: 'toast-bottom-center'
      });
      return
    }
    //Convertir valoración a un número
    if (this.skilled.score) {
      this.skilled.score = parseInt(this.skilled.score);
    }

    //Fecha updated_at = fecha hoy
    this.skilled.updated_at = new Date();

    //Actualizar experto
    this.editSub = this.skilledsService.editSkilled(this.skilledId, this.skilled).subscribe((data) => {
      //Mostrar Toast éxitoso
      this.toastr.success('Experto actualizado con éxito', 'Información', {
        positionClass: 'toast-bottom-center'
      });
    });
  }

  //Eliminar suscripciones
  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    if (this.getSkilledSub) {
      this.getSkilledSub.unsubscribe();
    }
    if (this.getTagsSub) {
      this.getTagsSub.unsubscribe();
    }
    if (this.editSub) {
      this.editSub.unsubscribe();
    }
  }
}
