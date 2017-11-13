import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, DatFamiliares } from '../../../providers/historiaClinica';


@Component({
  selector: 'page-ant-familiares',
  templateUrl: 'ant-familiares.html',
})
export class AntFamiliaresPage {
  
  fam:DatFamiliares[];
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HistoriaClinicaData) {
    this.fam=[];
  }

  ionViewDidLoad() {
    this.fam=this.service.dataFamiliares;
  }
  ionViewDidEnter() {
    console.log(this.fam[0].antecedente);
  }

}
