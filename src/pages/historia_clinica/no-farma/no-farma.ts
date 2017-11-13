import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-no-farma',
  templateUrl: 'no-farma.html',
})
export class NoFarmaPage {

  nofar:DatNofarma
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.nofar = {
      explicacion:"",
      identificacion:""
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NoFarmaPage');
  }

}

export class DatNofarma{
      explicacion:string;
      identificacion:string;
}