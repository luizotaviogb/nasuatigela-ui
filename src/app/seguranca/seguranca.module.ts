import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import {SegurancaRoutingModule} from './seguranca-routing.module';
import { AuthGuard } from './auth.guard'
import { environment } from './../../environments/environment';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';


export function getToken() {
  return localStorage.getItem('access_token');
 }

 
@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    SegurancaRoutingModule,
    CommonModule,
    FormsModule,
    ButtonModule,
    InputTextModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: getToken,
        whitelistedDomains: environment.tokenWhitelistedDomains,

          /* Caminhos adicionados em environment.prod.ts com expressão regular
          [
          'http://localhost:8080',
          'localhost:8080',
          'https://algamoney-api-giuvane.herokuapp.com',
          'algamoney-api-giuvane.herokuapp.com',
          ],
          */

        blacklistedRoutes: environment.tokenBlacklistedRoutes

          /* Caminhos adicionados em environment.prod.ts com expressão regular
          [
          'http://localhost:8080/oauth/token',
          'localhost:8080/oauth/token',
          'https://algamoney-api-giuvane.herokuapp.com/oauth/token',
          'algamoney-api-giuvane.herokuapp.com/oauth/token'
          ]
          */

      }
    })


  ],
  
  providers: [
    AuthGuard
  ],exports : [
    
    LoginFormComponent
  ]
})
export class SegurancaModule { }
