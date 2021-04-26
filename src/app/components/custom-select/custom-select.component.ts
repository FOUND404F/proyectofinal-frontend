import { Option } from 'src/app/interfaces/option';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit, OnChanges {
  @Input() list: Option[] = []; //Lista de opciones
  @Input() selected: string | any; //Valor de la opción seleccionada
  @Output() selectedChange = new EventEmitter<string>(); //Evento al cambiar la selección
  selectedOption: Option | any;
  constructor() { }

  ngOnInit(): void {
    this.selectedOption = this.list.find(option => option.value === this.selected); //Marcamos la opción seleccionada
  }

  //Detecta cambios y muestra la opción seleccionada
  ngOnChanges(): void {
    this.selectedOption = this.list.find(option => option.value === this.selected);
  }

  //Al seleccionar se muestra la opción seleccionada
  onSelect(elem: Option) {
    this.selected = elem.value;
    this.selectedOption = this.list.find(option => option.value === this.selected);
    this.selectedChange.emit(this.selected);
  }
}
