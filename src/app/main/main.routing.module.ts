import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const atendimentoRoutes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: 'atendimento', component: AtendimentoComponent },
      { path: '', redirectTo: 'atendimento', pathMatch: 'full' },
      { path: '**', redirectTo: 'atendimento', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(atendimentoRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
