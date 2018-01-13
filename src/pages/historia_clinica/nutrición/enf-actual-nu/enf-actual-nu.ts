import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, DatGineco } from '../../../../providers/historiaClinica';


@Component({
  selector: 'page-enf-actual-nu',
  templateUrl: 'enf-actual-nu.html',
})
export class EnfActualNuPage {
  act1:DatGineco[];
  act2:DatGineco[];
  act3:DatGineco[];
  act4:DatGineco[];
  act5:DatGineco[];
  act: DatEnfAct;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HistoriaClinicaData) {
    this.act1=[];
    this.act2=[];
    this.act3=[];
    this.act4=[];
    this.act5=[];
    this.act={ enfermedad:'',actividadf:'',tipos:'', motivo:''
    };
  }

  ionViewDidLoad() {
    this.act1=this.service.dataEnfAct1;
    this.act2=this.service.dataEnfAct2;
    this.act3=this.service.dataEnfAct3;
    this.act4=this.service.dataEnfAct4;
    this.act5=this.service.dataEnfAct5;
  }

}
export class DatEnfAct {
  enfermedad: string;
  actividadf: string;
  tipos: string;
  motivo: string;
}
