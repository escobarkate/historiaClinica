import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-observaciones',
  templateUrl: 'observaciones.html',
})
export class ObservacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObservacionesPage');
  }
  

}
