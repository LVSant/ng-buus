import { AlertMessageService } from 'app/core/alert-message/alert-message.service';
import { SessionService } from 'app/core/service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public EmailFocus: boolean;
  public PasswordFocus: boolean;
  public Email: string;
  public Password: string;

  constructor(private sessionService: SessionService, private alertMessage: AlertMessageService, private router: Router) {
  }

  setEmailFocus(focus) {
    this.EmailFocus = focus;
  }

  setPasswordFocus(focus) {
    this.PasswordFocus = focus;
  }

  login() {
    if (this.Email && this.Password) {
      this.sessionService.login({ email: this.Email, password: this.Password })
        .then(data => {
          if (data) {
            this.alertMessage.addAlert({ type: 'success', message: 'Logou com sucesso' });
            this.router.navigate(['/buus']);
          } else {
            this.alertMessage.addAlert({ type: 'warning', message: 'Usuario e/ou senha invalidos' });
          }
        });
    } else {
      this.alertMessage.addAlert({ type: 'warning', message: 'Os campos são de preenchimento obrigatório' });
    }
  }

}
