import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TelaListarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tela-listar',
  templateUrl: 'tela-listar.html',
})
export class TelaListarPage {

  post:any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.ListPost();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TelaListarPage');
  }

  ListPost(){
    this.restProvider.getPostagem()
    .then(data=>{
      this.post = data;
        console.log(this.post);
    });
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
