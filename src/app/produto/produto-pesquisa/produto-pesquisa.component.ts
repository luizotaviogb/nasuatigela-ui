import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';
import { ToastyService } from 'ng2-toasty';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { ProdutoFiltro, ProdutoService } from './../produto.service';

import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-produto-pesquisa',
  templateUrl: './produto-pesquisa.component.html',
  styleUrls: ['./produto-pesquisa.component.css']
})
export class ProdutoPesquisaComponent implements OnInit {




  produtos=[];
  filtro=new ProdutoFiltro();
  totalRegistros = 0;
  @ViewChild('tabela', {static:true}) grid: Table;

  
  constructor(
    private produtoService: ProdutoService,
    private toasty: ToastyService,
    public auth: AuthService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Lista de produtos');

  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.produtoService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.produtos = resultado.produtos;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
    console.log(event);
  }

  confirmarExclusao(produto: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(produto);
      }
    });
  }

  excluir(produto: any) {
    this.produtoService.excluir(produto.codigo)
      .then(() => {
        this.grid.reset();

        this.toasty.success('Produto excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }


}
