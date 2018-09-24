import { AppGuard } from 'app/core/guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {
    path: '', canActivate: [AppGuard], children: [
      { path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule' },
      { path: 'buus', loadChildren: 'app/main/main.module#MainModule' },
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
