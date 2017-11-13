import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, DatFamiliares } from '../../../providers/historiaClinica';


@Component({
  selector: 'page-ant-personales',
  templateUrl: 'ant-personales.html',
})
export class AntPersonalesPage {

  per:DatFamiliares[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service:HistoriaClinicaData) {
    this.per=[];
  }

  ionViewDidLoad() {
    this.per=this.service.dataPersonales;
  }

}
