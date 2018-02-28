import { Component, ElementRef, Directive } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public element:ElementRef ) {
    this.element = element;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoAvisoPage');
  }

  ngAfterViewInit(){
    this.element.nativeElement.querySelector("textarea").style.height = "100%";
  }


}
