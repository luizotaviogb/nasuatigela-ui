import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaService, PessoaFiltro } from './../pessoa.service'
import { Title } from '@angular/platform-browser';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { Table } from 'primeng/components/table/table';
import { LazyLoadEvent, ConfirmationService } from 'primeng/components/common/api';
import { AuthService } from 'src/app/seguranca/auth.service';




@Component({
  selector: 'app-cliente-pesquisa',
  templateUrl: './cliente-pesquisa.component.html',
  styleUrls: ['./cliente-pesquisa.component.css']
})
export class ClientePesquisaComponent implements OnInit {

  clientes = [];
  filtro = new PessoaFiltro();
  totalRegistros = 0;
  @ViewChild('tabela', {static: true}) grid: Table;

  pessoasUrl:string;

  clientes2= [

    {
      codigo:1, nome:'Luiz Otavio', endereco:'Rua Goias 999'

    }

  ];
  constructor(
    private pessoaService: PessoaService,
    private toasty: ToastyService,
    public auth: AuthService,
    private confirmation: ConfirmationService,
    private errorHandler: ErrorHandlerService,
    private title: Title
  ) {

   }

  ngOnInit() {
    this.title.setTitle('Pesquisa de pessoas');
  }

  pesquisar(pagina = 0) {
    this.filtro.pagina = pagina;

    this.pessoaService.pesquisar(this.filtro)
      .then(resultado => {
        this.totalRegistros = resultado.total;
        this.clientes = resultado.clientes;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  aoMudarPagina(event: LazyLoadEvent) {
    const pagina = event.first / event.rows;
    this.pesquisar(pagina);
    console.log(event);
  }

  confirmarExclusao(pessoa: any) {
    this.confirmation.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });
  }

  excluir(pessoa: any) {
    this.pessoaService.excluir(pessoa.codigo)
      .then(() => {
        this.grid.reset();

        this.toasty.success('Cliente excluído com sucesso!');
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  




}
