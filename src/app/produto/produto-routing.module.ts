import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'


import { ProdutoPesquisaComponent } from './produto-pesquisa/produto-pesquisa.component'
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component'
import { AuthGuard } from '../seguranca/auth.guard'

const routes: Routes = [


{
    path:'',
    component:ProdutoPesquisaComponent,
    canActivate:[AuthGuard],
    data:{roles:['ROLE_PESQUISAR_PRODUTO']}
},
{
    path:'novo',
    component:ProdutoCadastroComponent,
    canActivate:[AuthGuard],
    data:{roles:['ROLE_CADASTRAR_PRODUTO']}
},
{
    path:':codigo',
    component: ProdutoCadastroComponent,
    canActivate:[AuthGuard],
    data: {roles:['ROLE_CADASTRAR_PRODUTO']}
}

];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class ProdutoRoutingModule {}