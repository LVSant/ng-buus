import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as Services from './service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Ng2UiAuthModule } from 'ng2-ui-auth';
import { RouterModule } from '@angular/router';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    Ng2UiAuthModule.forRoot({}),
    NgxPaginationModule,
  ],
  exports: [
    NgbModule,
    CommonModule,
    RouterModule,
    FormsModule,
    AlertMessageComponent,
    NgxPaginationModule,
    NgxPermissionsModule
  ],
  providers: [
    Services.AuthService,
    Services.SessionService
  ],
  declarations: [AlertMessageComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {


    return {
      ngModule: CoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: Services.InterceptorService, multi: true },
        Services.AuthService,
        Services.SessionService,
      ]
    };
  }
}
