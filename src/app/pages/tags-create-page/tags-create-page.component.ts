import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TagsService } from './../../api/tags.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tags-create-page',
  templateUrl: './tags-create-page.component.html',
  styleUrls: ['./tags-create-page.component.scss']
})
export class TagsCreatePageComponent implements OnInit, OnDestroy {

  //Formulario de la etiqueta
  tagModel = {
    name: '',
    create_at: new Date,
    updated_at: new Date,
    skilleds: []
  }

  //Suscripciones
  createTagSub: Subscription = new Subscription;
  constructor(
    private tagService: TagsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  //Enviar formulario
  submit(form: NgForm) {
    if(form.invalid) {
      //Marcar inputs inválidos
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    }

    //Crear etiquetas
    this.createTagSub = this.tagService.createTag(this.tagModel).subscribe((data) => {
      this.router.navigateByUrl('/logged/tags');
    });
  }

  //Eliminar suscripciones
  ngOnDestroy() {
    if (this.createTagSub) {
      this.createTagSub.unsubscribe();
    }
  }
}
