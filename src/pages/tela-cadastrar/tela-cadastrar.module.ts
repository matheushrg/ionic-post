import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaCadastrarPage } from './tela-cadastrar';

@NgModule({
  declarations: [
    TelaCadastrarPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaCadastrarPage),
  ],
})
export class TelaCadastrarPageModule {}
