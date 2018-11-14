import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelaEditarPage } from './tela-editar';

@NgModule({
  declarations: [
    TelaEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(TelaEditarPage),
  ],
})
export class TelaEditarPageModule {}
