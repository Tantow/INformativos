import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AvisosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvisosProvider {

  URL_da_API = "http://api-tweets-neymar.herokuapp.com/"
  constructor(public http: HttpClient) {

  }

  getAvisos(){
    return new Promise(resolve =>{
      this.http.get(this.URL_da_API+"tweets#index").subscribe(dados => {
        resolve(dados);
      }, e => {
        console.log(e);
      });
    });
  }
}
