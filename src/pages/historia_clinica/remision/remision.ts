import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-remision',
  templateUrl: 'remision.html',
})
export class RemisionPage {
  remi:DatRemision;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.remi={ tipoconsul:"",nombrestab:"",lugarestab:"",resumen:""

    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RemisionPage');
  }

}

export class DatRemision {
  tipoconsul: string;
  nombrestab: string;
  lugarestab: string;
  resumen: string;
}