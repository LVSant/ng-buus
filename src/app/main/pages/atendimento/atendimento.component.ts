import { AtendimentoService } from './atendimento.service';
import { Component, OnInit } from '@angular/core';
import { IAtendimento } from 'app/model';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {


  constructor(
    private atendimentoService: AtendimentoService) {
  }

  public dados: IAtendimento[];

  filterChanged(filterData: any) {
    this.atendimentoService.getAtendimentosFilter(filterData)
      .subscribe(data => {
        this.dados = data ? data.data : new Array<IAtendimento>();
      });
  }

  ngOnInit() {
    this.atendimentoService.getAtendimentos().subscribe(
      data => {
        this.dados = data ? data.data : new Array<IAtendimento>();
      });
  }

}
