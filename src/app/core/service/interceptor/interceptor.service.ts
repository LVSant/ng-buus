import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertMessageService } from 'app/core/alert-message/alert-message.service';
import { SessionService } from '../session/session.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector,
    private alertMessage: AlertMessageService,
    private sessionService: SessionService,
  ) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let req = request;

    this.sessionService = this.injector.get(SessionService);

    if (this.sessionService.isAuthenticated) {
      req = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.sessionService.token)
      });
    }

    return next.handle(request)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log('ok');
          }
          console.log('EVENT ', event);
        }, error => {
          this.alertMessage.addAlert({ type: 'danger', message: error });
          console.error('ERROR: ', error);
        })
      );
  }
}
