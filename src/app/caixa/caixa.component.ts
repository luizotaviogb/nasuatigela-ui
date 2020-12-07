import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css']
})
export class CaixaComponent implements OnInit {

  caixa=[

    {
      codigo:1, saldo_a_receber:200, saldo_a_pagar:200, saldo_atual:400
    }

  ];
  constructor() { }

  ngOnInit() {
  }

}
