import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent implements OnInit {
  //Tipo list (cabecera principal)
  @Input() type = 'list';
  @Input() headerTitle = '';
  @Input() headerSubtitle = '';
  @Input() rightButton = '';
  @Input() rightButtonPage = '';

  //Tipo single (cabecera para las pantallas editar y crear)
  @Input() backText = '';
  @Input() currentPageText = '';
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToPage() {
    this.router.navigateByUrl(this.rightButtonPage);
  }

  goBack() {
    window.history.back();
  }
}
