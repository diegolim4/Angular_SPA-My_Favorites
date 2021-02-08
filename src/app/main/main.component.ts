import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {modelo} from '../model/modelo';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  listaFilmes: modelo[] = [
    {nome: 'O Senhor dos Anéis',imgUrl:'./assets/img/lotr.png' , descricao:'', genero: 'Fantasia', ano: 2000 },
    {nome: 'Star Wars - O Retorno de Jedi',imgUrl:'./assets/img/retornojedi.png', descricao:'', genero:'Fantasia/Sci-fi', ano: 1983},
    {nome: 'De Volta Para o Futuro',imgUrl:'./assets/img/bttf.png', descricao:'', genero:'Sci-fi/Aventura', ano: 1985},
  ];

  listaSeries: modelo[] = [
    {nome: 'Mad Men',imgUrl:'./assets/img/madmen.png', descricao:'', genero: 'Drama', ano: 2007 },
    {nome: 'Breaking Bad',imgUrl:'./assets/img/bb.png', descricao:'', genero: 'Drama', ano: 2008},
    {nome: 'The Office',imgUrl:'./assets/img/theoffice.png', descricao:'', genero: 'Comédia', ano: 2005}
  ];

  listaAnimes: modelo[] =[
    {nome:'Hunter x Hunter', imgUrl:'./assets/img/hunter.png', descricao:'', genero:'', ano: 2011 },
    {nome:'Attack on Titan', imgUrl:'./assets/img/attack.png', descricao:'', genero:'', ano: 2013 },
    {nome:'Death Note', imgUrl:'./assets/img/deathnote.png', descricao:'', genero:'', ano:  2006}
  ];

  listaBandas: modelo[] =[
    {nome:'The Beatles', imgUrl:'./assets/img/beatles.png', descricao:'', genero:'Rock', ano: 1963 },
    {nome:'The Killers', imgUrl:'./assets/img/killers.png', descricao:'', genero:'Indie Rock', ano: 2004 },
    {nome:'kanye West ', imgUrl:'./assets/img/ye.png', descricao:'', genero:'Rap', ano:  2004}
  ];  

  ngOnInit(): void {
  }
}
