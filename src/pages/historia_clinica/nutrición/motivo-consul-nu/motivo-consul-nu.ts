import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-motivo-consul-nu',
  templateUrl: 'motivo-consul-nu.html',
})
export class MotivoConsulNuPage {
 consul: DatMotivoConsul;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consul= {
      tipos:'',
      motivo:''
  };
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MotivoConsulNuPage');
  }

}
export class DatMotivoConsul {
  tipos: string;
  motivo: string;
}
