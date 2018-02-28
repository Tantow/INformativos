import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AvisosProvider } from '../../providers/avisos/avisos';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // conteudos:any;

  // constructor(public navCtrl: NavController) {
  //   this.conteudos = [{nome: 'Avisos Gerais', desc: 'Geral Geral'}, {nome: 'Presidência', desc: 'presidência Presidência'}, {nome: 'Marketing', desc: 'marketing marketing'}, {nome: 'Projeto', desc: 'projeto projeto'},{nome: 'GP', desc: 'GP GP GP'}, {nome: 'Financeiro', desc: 'financeiro financeiro'}];
  // }
  avisos: any;
  lista_completa: any;
  loader: any;

  constructor(public navCtrl: NavController, public loadCtrl: LoadingController, public avisosProv: AvisosProvider,
              private _alertCtrl: AlertController) {
    this.loader = this.loadCtrl.create({content: "Buscando avisos"});
    this.loader.present();
    this.getAviso();

  }

  ngOnInit(){

  }
  getAviso(){
    this.avisosProv.getAvisos().then(dados => {
      this.lista_completa = dados;
      console.log(this.lista_completa);
      this.zeraLista();
      this.loader.dismiss();
    },(e) => {
        let alert = this._alertCtrl.create({
          title: "XABU",
          subTitle: "Try Again Later",
          buttons: ["Leave Now"]
        });
    }
  );
  }

  zeraLista(){
    this.avisos = this.lista_completa;
  }

  // inicializa o itens
  //
  // initializeTweets(){
  //   this.tweets = ['ryu eh foda', 'chunli...','nash twoface'];
  // }

  // goToBrasil(item: any){
  //   this.navCtrl.push('AvisosPage', { id: item.id, conteudo: item.conteudo });
  //
  // }

  // para chamar os itens de uma lista:

  getItems(ev: any){
    // Reset items back to all of the items
    this.zeraLista();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.avisos = this.avisos.filter((item) => {
        return (item.conteudo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
