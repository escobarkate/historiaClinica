import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-ant-familiares',
  templateUrl: 'ant-familiares.html',
})
export class AntFamiliaresPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntFamiliaresPage');
  }

}
