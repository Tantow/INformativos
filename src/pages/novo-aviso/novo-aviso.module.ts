import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NovoAvisoPage } from './novo-aviso';

@NgModule({
  declarations: [
    NovoAvisoPage,
  ],
  imports: [
    IonicPageModule.forChild(NovoAvisoPage),
  ],
})
export class NovoAvisoPageModule {}
