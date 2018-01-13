import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, DatFamiliares } from '../../../../providers/historiaClinica';

@Component({
  selector: 'page-problemas-actuales',
  templateUrl: 'problemas-actuales.html',
})
export class ProblemasActualesPage {
  prob:DatFamiliares[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HistoriaClinicaData) {
    this.prob=[];
  }

  ionViewDidLoad() {
    this.prob=this.service.dataProbleActuales;
    console.log('ionViewDidLoad ProblemasActualesPage');
  }

}
