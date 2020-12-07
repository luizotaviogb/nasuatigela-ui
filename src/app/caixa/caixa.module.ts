import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaComponent } from './caixa.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    CaixaComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    TooltipModule,
    InputTextModule,
    SelectButtonModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    CommonModule
  ],
  exports:[
    CaixaComponent
  ]
})
export class CaixaModule { }
