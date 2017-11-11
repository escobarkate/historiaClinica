import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-ant-personales',
  templateUrl: 'ant-personales.html',
})
export class AntPersonalesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntPersonalesPage');
  }

}
