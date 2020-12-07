import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import * as moment from 'moment';
import { Venda } from 'src/app/core/model';
import { environment } from './../../environments/environment';
import { NasuatigelaHttp } from '../seguranca/nasuatigela-http';

export class VendaFiltro {
  vendaValorDe: number;
  vendaValorAte: number;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  vendasUrl: string;


  constructor(private http: NasuatigelaHttp) {
    this.vendasUrl = `${environment.apiUrl}/vendas`;
   }


   pesquisar(filtro: VendaFiltro): Promise<any> {
    
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.vendaValorDe) {
      params = params.append('vendaValorDe', filtro.vendaValorDe.toString());
    }

    if (filtro.vendaValorDe) {
        params = params.append('vendaValorAte', filtro.vendaValorAte.toString());
    }

    return this.http.get<any>(`${this.vendasUrl}?`, { params })
      .toPromise()
      .then(response => {
        const vendas = response.content;

        const resultado = {
          vendas,
          total: response.totalElements
        };
        return resultado;
      });

  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.vendasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(venda: Venda): Promise<Venda> {

    return this.http.post<Venda>(
      this.vendasUrl, venda)
      .toPromise();
  }

  atualizar(venda: Venda): Promise<Venda> {

    return this.http.put<Venda>(
      `${this.vendasUrl}/${venda.codigo}`, venda)
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response;
        return lancamentoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Venda> {
    return this.http.get<Venda>(`${this.vendasUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const venda = response;
        return venda;
      });
  }


}
