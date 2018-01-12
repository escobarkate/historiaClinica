import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-violencia-intra',
  templateUrl: 'violencia-intra.html',
})
export class ViolenciaIntraPage {

  vio:DatViolencia;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.vio = {
      familiabien:false,
      apoyofamilia:false,
      afecto:false,
      rechazado:false,
      agredido:false,
      suicida:false
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViolenciaIntraPage');
  }

}

export class DatViolencia {
     familiabien:boolean;
     apoyofamilia:boolean;
     afecto:boolean;
     rechazado:boolean;
     agredido:boolean;
     suicida:boolean
}
