import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primeiro-exemplo',
  templateUrl: './primeiro-exemplo.component.html',
  styleUrls: ['./primeiro-exemplo.component.css']
})
export class PrimeiroExemploComponent implements OnInit {

  nome: string = '';

  constructor() { }

  ngOnInit() {
  }

  public atualizaNome(NovoNome: Event) {
    this.nome = (<HTMLInputElement>NovoNome.target).value;
  }
}
