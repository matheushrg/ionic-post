import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaListarPage } from './tela-listar';

@NgModule({
  declarations: [
    TelaListarPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaListarPage),
  ],
})
export class TelaListarPageModule {}
