import { IAtendimento } from './../../../../model/atendimento';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-atendimento-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  p = 1;
  @Input() dados: IAtendimento[];

  constructor() { }

  ngOnInit() {
  }

}
