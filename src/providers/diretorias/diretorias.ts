import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DiretoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiretoriasProvider {

  URL_da_API = "https://hackathon-challenge.herokuapp.com/"
  constructor(public http: HttpClient) {

  }

  getDiretorias(){
    return new Promise(resolve =>{
      this.http.get(this.URL_da_API+"directorships").subscribe(dados => {
        resolve(dados);
      }, e => {
        console.log(e);
      });
    });
  }
}
