import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';


import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { Table } from 'primeng/components/table/table';
import { ToastyService } from 'ng2-toasty';

import { VendaService, VendaFiltro } from '../venda.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { AuthService } from 'src/app/seguranca/auth.service';

@Component({
  selector: 'app-venda-pesquisa',
  templateUrl: './venda-pesquisa.component.html',
  styleUrls: ['./venda-pesquisa.component.css']
})
export class VendaPesquisaComponent implements OnInit {

  


  totalRegistros = 0;
  filtro = new VendaFiltro();
  vendas = [];
  @ViewChild('tabela', {static: true}) grid: Table;

  constructor(
    private vendaService: VendaService,
    public auth: AuthService,
    private toasty: ToastyService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) { }

  ngOnInit(): void {
    
    this.title.setTitle('Pesquisa de vendas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.vendaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.vendas = resultado.vendas;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
    console.log(event);
  }

  confirmarExclusao(venda: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(venda);
      }
    });
  }

  excluir(venda: any) {
    this.vendaService.excluir(venda.codigo)
      .then(() => {
        this.grid.reset();
        this.toasty.success('Venda excluída com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
