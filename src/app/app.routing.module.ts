import { AppGuard } from 'app/core/guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';


const appRoutes: Routes = [
  {
    path: '', canActivate: [AppGuard], children: [
      {
        path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule', canActivate: [NgxPermissionsGuard],
        data: {
          Permissions: {
            except: ['COOPERATIVA', 'MOTORISTA'],
            redirectTo: '/buus'
          }
        }
      },
      {
        path: 'buus', loadChildren: 'app/main/main.module#MainModule', canActivate: [NgxPermissionsGuard],
        data: {
          permissions: {
            only: ['COOPERATIVA', 'MOTORISTA'],
            redirectTo: '/auth'
          },
        }
      },
      { path: '', redirectTo: 'auth', pathMatch: 'full' },
      { path: '**', redirectTo: 'auth', pathMatch: 'full' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
