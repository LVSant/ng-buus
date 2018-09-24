import { AlertMessageService } from 'app/core/alert-message/alert-message.service';
import { IAlertMessage } from 'app/model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  @Input()
  public alerts: Array<IAlertMessage> = [];


  constructor(private alertMessage: AlertMessageService) {
  }

  ngOnInit() {
    this.alerts = this.alertMessage.alerts;
    this.alertMessage.bSubject.subscribe(value => {
      console.log('VALUE SUBS', value);
    });
  }

  public closeAlert(alert: IAlertMessage) {
    this.alertMessage.closeAlert(alert);
  }

}
