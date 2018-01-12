import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, DatParaclinico } from '../../../providers/historiaClinica';


@Component({
  selector: 'page-paraclinicos',
  templateUrl: 'paraclinicos.html',
})
export class ParaclinicosPage {

  para:DatParaclinico[];
  obs:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HistoriaClinicaData) {
    this.para=[];
    this.obs="";
  }

  ionViewDidLoad() {
    this.para=this.service.dataParaclinicos;
  }

}
