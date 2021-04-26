import { DeleteTagModalComponent } from './../../components/delete-tag-modal/delete-tag-modal.component';
import { Tag } from './../../interfaces/tag';
import { TagsService } from './../../api/tags.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-tags-page',
  templateUrl: './tags-page.component.html',
  styleUrls: ['./tags-page.component.scss']
})
export class TagsPageComponent implements OnInit, OnDestroy {

  //Suscripciones
  getTagsSub: Subscription = new Subscription;
  modalHideSub: Subscription = new Subscription;

  //Etiquetas
  tags: Tag[] = [];

  //Referencia modal
  deleteModalRef: BsModalRef = new BsModalRef;

  //Filtros
  filters = {
    name: ''
  }
  constructor(
    private tagsService: TagsService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.getTags();
  }

  //Evento cambio nombre
  nameChanged(event) {
    this.filters.name = event.target.value;
    this.getTags();
  }

  //Obtener etiquetas
  getTags() {
    this.getTagsSub = this.tagsService.getTags(this.filters.name).subscribe((data: Tag[]) => {
      console.log(data)
      this.tags = data;
    });
  }

  //Borrar etiqueta
  deleteTag(tag: Tag) {
    const initialState = {  //Estado inicial modal
      tag
    }
    this.deleteModalRef = this.modalService.show(DeleteTagModalComponent, {initialState});  //Mostrar modal

    //Si existe suscripción eliminarla
    if (this.modalHideSub) {
      this.modalHideSub.unsubscribe();
    }

    //Suscribirse a cerrar modal
    this.modalHideSub = this.modalService.onHide.subscribe(()=> {
      this.getTags();
    })
  }

  //Eliminar suscripciones
  ngOnDestroy() {
    if (this.getTagsSub) {
      this.getTagsSub.unsubscribe();
    }
    if (this.modalHideSub) {
      this.modalHideSub.unsubscribe();
    }
  }
}
