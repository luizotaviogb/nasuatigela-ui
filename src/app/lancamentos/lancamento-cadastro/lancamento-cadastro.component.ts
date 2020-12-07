  
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastyService } from 'ng2-toasty';
import { MessageService } from 'primeng/api';
import {Message} from 'primeng/api';

import { ErrorHandlerService } from 'src/app/core/error-handler.service';
import { PessoaService } from 'src/app/cliente/pessoa.service';
import { Lancamento } from 'src/app/core/model';
import { LancamentoService } from '../lancamento.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})


export class LancamentoCadastroComponent implements OnInit {

  tipos = [
    { label: 'Receita', value: '1' },
    { label: 'Despesa', value: '0' }
  ];

  formulario: FormGroup;
  uploadEmAndamento = false;

  constructor(
    private lancamentoService: LancamentoService,
    private toasty: ToastyService,
    private messageService: MessageService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
     this.configurarFormulario();

     this.title.setTitle('Novo lançamento');
 
     const codigoLancamento = this.route.snapshot.params['codigo'];
 
     if (codigoLancamento) {
       this.carregarLancamentoEdicao(codigoLancamento);
     }
 
     
  }



  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      codigo: [],
      tipo: ['0 = despesa, 1 = receita ', Validators.required],
      status: ['0 = não pago, 1 = pago', Validators.required],
      dataVencimento: [null, Validators.required],
      dataPagamento: [],
      descricao: [null, [this.validarCampoObrigatorio, this.validarTamanhoMinimo(5)]], 
      valor: [null, Validators.required],
      observacao: [],
    });
  }

  
  validarCampoObrigatorio(intput: FormControl) {
    return (intput.value ? null : { obrigatoriedade: true });
  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : {tamanhoMinimo: {tamanho: valor } };
    }
  }

  carregarLancamentoEdicao(codigo: number) {

    this.lancamentoService.buscarPorCodigo(codigo)
    .then(lancamento => {
      this.formulario.patchValue(lancamento);
      this.atualizarTituloEdicao();
    })
    .catch(error => this.errorHandler.handle(error));
  }

  salvar() {
    if (this.editando) {
      this.atualizarLancamento();
    } else {
      this.adicionarLancamento();
    }
  }

  get editando() {
    return Boolean(this.formulario.get('codigo').value);
  }

  adicionarLancamento() {
    this.lancamentoService.adicionar(this.formulario.value)
      .then(lancamentoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });

        this.router.navigate(['/lancamentos', lancamentoAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarLancamento() {
    this.lancamentoService.atualizar(this.formulario.value)
      .then(lancamento => {
        this.formulario.patchValue(lancamento);

        this.messageService.add({ severity: 'success', detail: 'Lançamento alterado com sucesso!', });

        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo() {
    this.formulario.reset();

 
    setTimeout(function() {
      this.lancamento = new Lancamento();
    }.bind(this), 1);
    this.router.navigate(['/lancamentos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de lançamento ${this.formulario.get('descricao').value}`);
  }



}
