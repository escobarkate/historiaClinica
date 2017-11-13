import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData, DatFamiliares } from '../../../providers/historiaClinica';

@Component({
  selector: 'page-exam-fisico',
  templateUrl: 'exam-fisico.html',
})
export class ExamFisicoPage {

  ex:DatFamiliares[]; 
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HistoriaClinicaData) {
      this.ex=[];
  }

  ionViewDidLoad() {
    this.ex = this.service.dataExmFisico;
  }

}
