import { CoreModule } from './../core/core.module';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth.routing.module';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CoreModule,
    AuthRoutingModule
  ],
  declarations: [ AuthComponent ]
})
export class AuthModule { }
