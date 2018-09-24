import { AtendimentoService } from './pages/atendimento/atendimento.service';
import { FilterComponent } from './components/atendimento/filter/filter.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main.routing.module';
import { MainComponent } from './main/main.component';
import { CoreModule } from '../core/core.module';
import { TableComponent } from './components/atendimento/table/table.component';

@NgModule({
  imports: [
    CoreModule,
    MainRoutingModule
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AtendimentoComponent,
    FilterComponent,
    TableComponent,
    MainComponent
  ],
  providers: [AtendimentoService]
})
export class MainModule { }
