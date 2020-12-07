import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { SharedModule } from '../shared/shared.module';
import { CurrencyMaskModule } from 'ng2-currency-mask';



@NgModule({
  declarations: [
    ClienteCadastroComponent,
    ClientePesquisaComponent],
  imports: [
    CalendarModule,
    CommonModule,
    InputTextModule,
    InputMaskModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule
  ],
  exports:[
    ClienteCadastroComponent,
    ClientePesquisaComponent
  ]
})
export class ClienteModule { }
