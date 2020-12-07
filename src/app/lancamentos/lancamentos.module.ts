import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { SharedModule } from '../shared/shared.module';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentoPesquisaComponent } from './lancamento-pesquisa/lancamento-pesquisa.component';
import { LancamentosRoutingModule } from './lancamentos-routing.module';


@NgModule({
  declarations: [
    LancamentoPesquisaComponent, 
    LancamentoCadastroComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    FileUploadModule,
    ProgressSpinnerModule,
    AngularFontAwesomeModule,
    CurrencyMaskModule,
    LancamentosRoutingModule,
    ReactiveFormsModule

  ],
  exports:[
    LancamentoCadastroComponent,
    LancamentoPesquisaComponent
  ]
})

export class LancamentosModule { }
