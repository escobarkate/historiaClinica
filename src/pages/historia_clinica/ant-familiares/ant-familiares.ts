import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, HistoriaClinica } from '../../../providers/historiaClinica';


@Component({
  selector: 'page-ant-familiares',
  templateUrl: 'ant-familiares.html',
})
export class AntFamiliaresPage {
  HC:HistoriaClinica;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntFamiliaresPage');
  }

}
