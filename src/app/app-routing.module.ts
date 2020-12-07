import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './seguranca/login-form/login-form.component'
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import{ LancamentoPesquisaComponent } from './lancamentos/lancamento-pesquisa/lancamento-pesquisa.component';

import {ClientePesquisaComponent} from './cliente/cliente-pesquisa/cliente-pesquisa.component'
import { ClienteCadastroComponent } from './cliente/cliente-cadastro/cliente-cadastro.component'

import { PaginaNaoEncontradaComponent } from './core/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { NaoAutorizadoComponent } from './core/nao-autorizado.component';
import { ProdutoPesquisaComponent } from './produto/produto-pesquisa/produto-pesquisa.component';




const routes: Routes = [

  {path: 'lancamentos',  loadChildren: './lancamentos/lancamentos.module#LancamentosModule'},
  //  {path: 'lancamentos', component:LancamentoPesquisaComponent},
  //  {path: 'pessoas', loadChildren: './cliente/cliente.module#ClienteModule'},
    //{path: 'produtos', loadChildren: './produto/produto.module#ProdutoModule'},
   // {path: 'venda', loadChildren: './venda/venda.module#VendaModule'},
    { path: '**', redirectTo: 'pagina-nao-encontrada' },
    { path: 'pagina-nao-encontrada', component: PaginaNaoEncontradaComponent },
    { path: 'nao-autorizado', component: NaoAutorizadoComponent },
    
    {path: 'pessoas', component: ClientePesquisaComponent},
    { path: 'produtos', component:ProdutoPesquisaComponent}



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
