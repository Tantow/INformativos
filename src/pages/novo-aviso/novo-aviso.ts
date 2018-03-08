import { Component, ElementRef, Directive } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AvisosProvider } from '../../providers/avisos/avisos';

/**
 * Generated class for the NovoAvisoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-aviso',
  templateUrl: 'novo-aviso.html',
})

@Directive({
  selector: '[elastic]'
})

export class NovoAvisoPage {

  aviso = {title: '', description: '', directorship_id: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public element:ElementRef, public avisosProvider:AvisosProvider ) {
    this.element = element;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoAvisoPage');
  }

  ngAfterViewInit(){
    this.element.nativeElement.querySelector("textarea").style.height = "100%";
  }

  saveAviso(aviso) {
    this.avisosProvider.saveAviso(this.aviso).then((result) => {
      console.log(result);}, (err) => {
        console.log(err);});
  }
}