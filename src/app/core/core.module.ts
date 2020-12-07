import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ToastyModule } from 'ng2-toasty';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { GrowlModule } from 'primeng/growl';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ToastModule } from 'primeng/toast';
import { JwtHelperService } from '@auth0/angular-jwt';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../cliente/pessoa.service'
import { RouterModule } from '@angular/router';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AuthService } from '../seguranca/auth.service';
import { NaoAutorizadoComponent } from './nao-autorizado.component';
import { NasuatigelaHttp } from '../seguranca/nasuatigela-http';
import { ProdutoService } from '../produto/produto.service'
import { VendaService } from '../venda/venda.service'



@NgModule({
  declarations: [
    NavbarComponent,
    PaginaNaoEncontradaComponent,
    NaoAutorizadoComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    
    ToastyModule,
    GrowlModule,
    MessageModule,
    ToastModule,
    ConfirmDialogModule
  ],
  exports :[
    NavbarComponent,
    ToastyModule,
    GrowlModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    ConfirmDialogModule
  ],
  providers :[
    VendaService,
    ProdutoService,
    LancamentoService,
    PessoaService,
    ErrorHandlerService,
    AuthService,
    NasuatigelaHttp,

    ConfirmationService,
    MessageService,
    JwtHelperService,
    Title,
    {provide: LOCALE_ID, useValue: 'pt-BR'}
  ]
})
export class CoreModule { }
