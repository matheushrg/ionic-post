import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaContaPage } from './tela-conta';

@NgModule({
  declarations: [
    TelaContaPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaContaPage),
  ],
})
export class TelaContaPageModule {}
