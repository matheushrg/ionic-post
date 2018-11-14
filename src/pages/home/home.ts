import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Tela2Page } from '../tela2/tela2';
import { TelaCadastroPage } from '../tela-cadastro/tela-cadastro';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  post: any;

  constructor(public navCtrl: NavController) {
  }

  Logar(){
    this.navCtrl.push(Tela2Page);
  }

  Cadastrar(){
    this.navCtrl.push(TelaCadastroPage);
  }


}
