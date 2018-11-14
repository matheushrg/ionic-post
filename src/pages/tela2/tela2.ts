import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TelaContaPage } from '../tela-conta/tela-conta';
import { TelaExcluirPage } from '../tela-excluir/tela-excluir';
import { TelaListarPage } from '../tela-listar/tela-listar';
import { TelaEditarPage } from '../tela-editar/tela-editar';

/**
 * Generated class for the Tela2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela2',
  templateUrl: 'tela2.html',
})
export class Tela2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tela2Page');
  }
  
  Conta(){
    this.navCtrl.push(TelaContaPage);
  }

  Excluir(){
    this.navCtrl.push(TelaExcluirPage);
  }

  Listar(){
    this.navCtrl.push(TelaListarPage);
  }

  Editar(){
    this.navCtrl.push(TelaEditarPage);
  }

}
