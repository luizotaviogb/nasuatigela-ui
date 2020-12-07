import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import{ HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Routes, RouterModule, Router } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LancamentosModule } from './lancamentos/lancamentos.module'

import { SharedModule } from './shared/shared.module'



import { SegurancaModule } from './seguranca/seguranca.module'
import { CoreModule } from './core/core.module'

import {SegurancaRoutingModule} from './seguranca/seguranca-routing.module';


import { ClienteModule } from './cliente/cliente.module'


import { ProdutoModule } from './produto/produto.module'

import { VendaModule } from './venda/venda.module'

import { CaixaModule } from './caixa/caixa.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ClienteModule,
    CaixaModule,
    VendaModule,
    ProdutoModule,
    LancamentosModule,
    SegurancaRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    SegurancaModule,
    ProdutoModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
