import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-ant-farmacologicos',
  templateUrl: 'ant-farmacologicos.html',
})
export class AntFarmacologicosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntFarmacologicosPage');
  }

}
