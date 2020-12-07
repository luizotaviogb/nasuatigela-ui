import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Cliente } from '../core/model'
import { environment } from './../../environments/environment'
import { NasuatigelaHttp } from '../seguranca/nasuatigela-http'


@Injectable({
  providedIn: 'root'
})
export class PessoaFiltro {
  nome:string;
  pagina=0;
  itensPorPagina=5;
}
export class PessoaService {

    pessoasUrl:string;

  constructor(private http: NasuatigelaHttp) { 
    this.pessoasUrl = `${environment.apiUrl}/clientes`;

  }

  pesquisar (filtro: PessoaFiltro): Promise<any> {
    
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('nome', filtro.nome);
    }

    return this.http.get<any>(`${this.pessoasUrl}`, { params })
      .toPromise()
      .then(response => {
        const pessoas = response.content;
        const resultado = {
          pessoas,
          total: response.totalElements
        };
        return resultado;
      });
  }

  listarTodas(): Promise<any> {
    return this.http.get<any>(this.pessoasUrl)
      .toPromise()
      .then(response => response.content);
  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.pessoasUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.put<void>(`${this.pessoasUrl}/${codigo}/ativo`, ativo, { headers })
      .toPromise();
  }

  adicionar(pessoa: Cliente): Promise<Cliente> {

    return this.http.post<Cliente>(
      this.pessoasUrl, pessoa)
      .toPromise();
  }

  atualizar(pessoa: Cliente): Promise<Cliente> {

    return this.http.put<Cliente>(
      `${this.pessoasUrl}/${pessoa.codigo}`, pessoa)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Cliente> {
    return this.http.get<Cliente>(`${this.pessoasUrl}/${codigo}`)
      .toPromise();
  }


}
