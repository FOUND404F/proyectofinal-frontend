import { Subscription } from 'rxjs';
import { TagsService } from './../../api/tags.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Tag } from 'src/app/interfaces/tag';

@Component({
  selector: 'app-delete-tag-modal',
  templateUrl: './delete-tag-modal.component.html',
  styleUrls: ['./delete-tag-modal.component.scss']
})
export class DeleteTagModalComponent implements OnInit, OnDestroy {
  tag: Tag = {
    name: '',
    id: 1
  };
  deleteSub: Subscription = new Subscription;
  constructor(
    public bsModalRef: BsModalRef,
    private tagsService: TagsService
  ) { }

  ngOnInit(): void {
  }

  //Borra una etiqueta
  deleteTag() {
    this.deleteSub = this.tagsService.deleteTag(this.tag.id).subscribe((data) => {
      this.bsModalRef.hide();
    })
  }

  ngOnDestroy() {
    if (this.deleteSub) {
      this.deleteSub.unsubscribe();
    }
  }
}
