import { NgxPermissionsGuard } from 'ngx-permissions';
import { AppGuard } from 'app/core/guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '', canActivate: [AppGuard], canActivateChild: [NgxPermissionsGuard], children: [
      {
        path: 'auth',
        data: {
          permissions: {
            except: ['COOPERATIVA', 'MOTORISTA'],
            redirectTo: '/buus'
          },
        },
        // canLoad: [NgxPermissionsGuard],
        loadChildren: 'app/auth/auth.module#AuthModule'
      },
      {
        path: 'buus',
        data: {
          permissions: {
            only: ['COOPERATIVA', 'MOTORISTA'],
            redirectTo: '/auth'
          },
        },
        // canLoad: [NgxPermissionsGuard],
        loadChildren: 'app/main/main.module#MainModule',
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
