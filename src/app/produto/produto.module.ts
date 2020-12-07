import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutoPesquisaComponent } from './produto-pesquisa/produto-pesquisa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CurrencyMaskModule } from 'ng2-currency-mask';

import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProdutoCadastroComponent, 
    ProdutoPesquisaComponent],
  imports: [
    SharedModule,
    FormsModule,
    CommonModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    SelectButtonModule,
    DropdownModule,
    ProgressSpinnerModule,
    AngularFontAwesomeModule,
    CurrencyMaskModule 
  ],
  exports:[
    ProdutoCadastroComponent,
    ProdutoPesquisaComponent
  ]
})
export class ProdutoModule { }
