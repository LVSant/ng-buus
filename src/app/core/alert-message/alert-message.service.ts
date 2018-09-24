import { Subject, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

import { IAlertMessage } from 'app/model';

@Injectable()
export class AlertMessageService {
  alerts: Array<IAlertMessage> = [];
  public bSubject = new BehaviorSubject(this.alerts);
  constructor() {
  }

  getAlerts() {
    return this.alerts;
  }

  addAlert(alert: IAlertMessage) {
    this.alerts.push(alert);
    this.bSubject.next(this.alerts);
    setTimeout(() => this.closeAlert(alert), 4200);
  }

  closeAlert(alert: IAlertMessage) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }
}
