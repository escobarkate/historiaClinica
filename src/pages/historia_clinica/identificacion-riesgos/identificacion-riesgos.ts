import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-identificacion-riesgos',
  templateUrl: 'identificacion-riesgos.html',
})
export class IdRiesgosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FactProtectoresPage');
  }

}
