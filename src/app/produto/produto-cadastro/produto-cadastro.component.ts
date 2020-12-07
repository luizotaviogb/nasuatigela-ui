import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ToastyService } from 'ng2-toasty';

import { Produto } from './../../core/model';
import { ProdutoService } from '../produto.service';
import { ErrorHandlerService } from 'src/app/core/error-handler.service';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {

  produto = new Produto();

  constructor(
    private produtoService: ProdutoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
  ) { }

  ngOnInit() {
    this.title.setTitle('Novo Produto');
    const codigoProduto = this.route.snapshot.params['codigo'];


    if (codigoProduto) {
      this.carregarProdutoEdicao(codigoProduto);
    }
  
  }






  get editando() {
    return Boolean(this.produto.codigo);
  }

  carregarProdutoEdicao(codigo: number) {

    this.produtoService.buscarPorCodigo(codigo)
    .then(produto => {
      this.produto = produto;

      this.atualizarTituloEdicao();
    })
    .catch(error => this.errorHandler.handle(error));
  }

  salvar(form: NgForm) {
    if (this.editando) {
      this.atualizarProduto(form);
    } else {
      this.adicionarProduto(form);
    }
  }

  adicionarProduto(form: NgForm) {
    this.produtoService.adicionar(this.produto)
      .then(produtoAdicionado => {
        this.toasty.success('Produto adicionado com sucesso!');

        this.router.navigate(['/produtos', produtoAdicionado.codigo]);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarProduto(form: NgForm) {
    this.produtoService.atualizar(this.produto)
      .then(produto => {
        this.produto = produto;

        this.toasty.success('Produto alterado com sucesso!');
        this.atualizarTituloEdicao();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(function() {
      this.produto= new Produto();
    }.bind(this), 1);
    this.router.navigate(['/produtos/novo']);
  }

  atualizarTituloEdicao() {
    this.title.setTitle(`Edição de produto ${this.produto.nome}`);
  }
}
