import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AvisosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AvisosProvider {

  URL_da_API = "https://hackathon-challenge.herokuapp.com/"
  constructor(public http: HttpClient) {

  }

  getAvisos(){
    return new Promise(resolve =>{
      this.http.get(this.URL_da_API+"avisos").subscribe(dados => {
        resolve(dados);
      }, e => {
        console.log(e);
      });
    });
  }

  saveAviso(data){
    return new Promise((resolve, reject) => {
      console.log(JSON.stringify(data));
      this.http.post(this.URL_da_API+'avisos',  {"title": data.title, "description": data.description, "directorship_id": data.directorship_id})
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
