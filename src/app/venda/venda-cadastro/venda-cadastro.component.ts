import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';
import { MessageService } from 'primeng/api';
import {Message} from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from 'src/app/cliente/pessoa.service';
import { Venda } from 'src/app/core/model';
import { VendaService } from '../venda.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  formulario: FormGroup;
  venda = new Venda();

  constructor(
    private vendaService: VendaService,
    private toasty: ToastyService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.title.setTitle('Nova venda');
  }

  carregarVendaEdicao(codigo: number) {

    this.vendaService.buscarPorCodigo(codigo)
    .then(venda => {
      this.formulario.patchValue(venda);
    })
    .catch(error => this.errorHandler.handle(error));
  }

  salvar() {
    if (this.editando) {
      this.atualizarVenda();
    } else {
      this.adicionarVenda();
    }
  }

  get editando() {
    return Boolean(this.formulario.get('codigo').value);
  }

  adicionarVenda() {
    this.vendaService.adicionar(this.formulario.value)
      .then(vendaAdicionada => {
        this.messageService.add({ severity: 'success', detail: 'Venda adicionada com sucesso!' });

        this.router.navigate(['/vendas', vendaAdicionada.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarVenda() {
    this.vendaService.atualizar(this.formulario.value)
      .then(venda => {
        this.formulario.patchValue(venda);

        this.messageService.add({ severity: 'success', detail: 'Venda alterada com sucesso!', });

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();

 
    setTimeout(function() {
      this.venda = new Venda();
    }.bind(this), 1);
    this.router.navigate(['/vendas/novo']);
  }

}
