import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-violencia-intra',
  templateUrl: 'violencia-intra.html',
})
export class ViolenciaIntraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViolenciaIntraPage');
  }

}
