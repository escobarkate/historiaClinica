import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-morisky',
  templateUrl: 'morisky.html',
})
export class MoriskyPage {

  mor:DatMoriski;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.mor = {
        olvida:false,
        descuidado:false,
        biendejar:false,
        maldejar:false
      }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoriskyPage');
  }

}

export class DatMoriski{
    olvida:boolean;
    descuidado:boolean;
    biendejar:boolean;
    maldejar:boolean;
}