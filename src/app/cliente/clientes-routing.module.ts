import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'

import { ClientePesquisaComponent } from './cliente-pesquisa/cliente-pesquisa.component'
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component'
import { AuthGuard } from '../seguranca/auth.guard'

const routes : Routes = [

{
    path:'',
    component: ClientePesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles : ['ROLE_PESQUISAR_USUARIO']}
},

{
    path:'novo',
    component: ClienteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles:['ROLE_CADASTRAR_USUARIO']}
},

{
    path: ':codigo',
    component: ClienteCadastroComponent,
    canActivate: [AuthGuard],
    data: { roles: ['ROLE_CADASTRAR_USUARIO']}
}

];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})

export class ClientesRoutingModule{}