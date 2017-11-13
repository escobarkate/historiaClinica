import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData , DatFarmacologicos } from '../../../providers/historiaClinica';




@Component({
  selector: 'page-ant-farmacologicos',
  templateUrl: 'ant-farmacologicos.html',
})
export class AntFarmacologicosPage {
  farma:DatFarmacologicos;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.farma= { 
          medprevia:"",
          prof:"",
          adherencia:false,
          alergia:false,
          alergias:""
    };
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntFarmacologicosPage');
  }

}
