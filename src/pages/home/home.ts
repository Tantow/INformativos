import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  conteudos:any;
  
  constructor(public navCtrl: NavController) {
    this.conteudos = [{nome: 'Avisos Gerais', desc: 'Geral Geral'}, {nome: 'Presidência', desc: 'presidência Presidência'}, {nome: 'Marketing', desc: 'marketing marketing'}, {nome: 'Projeto', desc: 'projeto projeto'},{nome: 'GP', desc: 'GP GP GP'}, {nome: 'Financeiro', desc: 'financeiro financeiro'}]; 
  }

}
