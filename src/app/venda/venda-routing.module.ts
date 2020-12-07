import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { AuthGuard } from '../seguranca/auth.guard'
import { VendaPesquisaComponent } from './venda-pesquisa/venda-pesquisa.component'
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component'

const routes:Routes=[
    {
        path:'',
        component:VendaPesquisaComponent,
        canActivate:[AuthGuard],
        data:{roles:['ROLE_PESQUISAR_VENDA']}
    },
    {
        path:'novo',
        component:VendaCadastroComponent,
        canActivate:[AuthGuard],
        data:{roles:['ROLE_CADASTRAR_VENDA']}
    },
    {
        path:':codigo',
        component:VendaCadastroComponent,
        canActivate:[AuthGuard],
        data:{roles:['ROLE_CADASTRAR_VENDA']}
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class VendaRoutingModule{}