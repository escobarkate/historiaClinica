import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData,DatGineco } from '../../../../providers/historiaClinica';



@Component({
  selector: 'page-ant-gineco',
  templateUrl: 'ant-gineco.html',
})
export class AntGinecoPage {
  gineco:DatGineco[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HistoriaClinicaData) {
    this.gineco=[];
  }

  ionViewDidLoad() {
    this.gineco=this.service.dataAntGineco;
  }

}
