import { AlertMessageService } from 'app/core/alert-message/alert-message.service';
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
    private atendimentoService: AtendimentoService,
    private alertMessage: AlertMessageService) {
  }

  public dados: IAtendimento[];

  filterChanged(filterData: any) {
    this.atendimentoService.getAtendimentosFilter(filterData)
      .subscribe(data => {
        if (data) {
          this.dados = data.data;
        } else {
          this.alertMessage.addAlert({ type: 'warning', message: 'Nenhum dado encontrado para os filtros aplicados' });
        }
      });
  }

  ngOnInit() {
    this.atendimentoService.getAtendimentos().subscribe(
      data => {
        if (data) {
          this.dados = data.data;
        } else {
          this.alertMessage.addAlert({ type: 'warning', message: 'Nenhum dado encontrado para os filtros aplicados' });
        }
      });
  }

}
