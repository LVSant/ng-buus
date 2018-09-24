import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { isWithinRange, format } from 'date-fns';
import { IAtendimento } from 'app/model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AtendimentoService {

  constructor(private httpClient: HttpClient) {
  }


  getAtendimentos(): Observable<any> {
    return this.httpClient.get(environment.ApiURL + '/atendimentos');
  }

  getAtendimentosFilter(filterData: any): Observable<any> {
    const paramFrom = 'from=' +
      format(new Date(filterData.fromDate.year, filterData.fromDate.month - 1, filterData.fromDate.day), 'YYYY-MM-DD');
    if (!filterData.toDate) {
      filterData.toDate = filterData.fromDate;
    }
    const paramTo = 'to=' +
      format(new Date(filterData.toDate.year, filterData.toDate.month - 1, filterData.toDate.day), 'YYYY-MM-DD');
    return this.httpClient.get(environment.ApiURL + '/atendimentos?' + paramFrom + '&' + paramTo);
  }
}
