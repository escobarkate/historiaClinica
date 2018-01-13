import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, DatParaclinico } from '../../../../providers/historiaClinica';


@Component({
  selector: 'page-fact-protectores',
  templateUrl: 'fact-protectores.html',
})
export class FactProtectoresPage {

  factPro:DatParaclinico[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:HistoriaClinicaData) {
    this.factPro=[];
  }

  ionViewDidLoad() {
    this.factPro=this.service.dataFactProctectores;
  }

}
