import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData , DatFamiliares } from '../../../providers/historiaClinica';


@Component({
  selector: 'page-revision-sistemas',
  templateUrl: 'revision-sistemas.html',
})
export class RevisionSistemasPage {
  
  rev:DatFamiliares[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: HistoriaClinicaData) {
    this.rev=[];
  }

  ionViewDidLoad() {
    this.rev=this.service.dataRevSistemas;
  }

}
