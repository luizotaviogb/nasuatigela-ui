import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Produto } from 'src/app/core/model';
import { environment } from './../../environments/environment';
import { NasuatigelaHttp } from '../seguranca/nasuatigela-http';




@Injectable({
  providedIn: 'root'
})

export class ProdutoFiltro{
  nome:string;
  pagina=0;
  itensPorPagina=5;
  produtoValorDe:number;
  produtoValorAte:number;
}
export class ProdutoService {

  produtosUrl:string;
  
  constructor(private http: NasuatigelaHttp) {

   this.produtosUrl =  `${environment.apiUrl}/produtos`;

   }

  pesquisar(filtro: ProdutoFiltro): Promise<any> {
    let params = new HttpParams({
      fromObject: {
        page: filtro.pagina.toString(),
        size: filtro.itensPorPagina.toString()
      }
    });

    if (filtro.nome) {
      params = params.append('produto_nome', filtro.nome);
    }

    if (filtro.produtoValorDe) {
      params = params.append('produtoValorDe',filtro.produtoValorDe.toString());
    }

    if (filtro.produtoValorAte) {
        params = params.append('produtoValorAte',filtro.produtoValorAte.toString());
    }

    return this.http.get<any>(`${this.produtosUrl}?`, { params })
      .toPromise()
      .then(response => {
        const produtos = response.content;

        const resultado = {
          produtos,
          total: response.totalElements
        };
        return resultado;
      });

  }

  excluir(codigo: number): Promise<void> {
    return this.http.delete(`${this.produtosUrl}/${codigo}`)
      .toPromise()
      .then(() => null);
  }

  adicionar(produto: Produto): Promise<Produto> {

    return this.http.post<Produto>(
      this.produtosUrl, produto)
      .toPromise();
  }

  atualizar(produto: Produto): Promise<Produto> {

    return this.http.put<Produto>(
      `${this.produtosUrl}/${produto.codigo}`, produto)
      .toPromise()
      .then(response => {
        const produtoAlterado = response;
        return produtoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Produto> {
    return this.http.get<Produto>(`${this.produtosUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const produto = response;
        return produto;
      });
  }


}
