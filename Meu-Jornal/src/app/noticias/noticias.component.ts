import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias: string[] = ["Noticia 1", "Noticia 2", "Noticia 3", "Noticia 4"];
  MostrarNoticia: boolean = true;

  titulo: string = 'Treinamento Curso Angular';
  texto: string = 'Utilizando String Interpolation';
  caminho_imagem: string = '../../assets/mario.png'


  constructor() { }

  ngOnInit() {
  }

  public EsconderNoticia() {
    this.MostrarNoticia = false;
  }
 public Voltar(){
 this.MostrarNoticia = true;
 }

}
