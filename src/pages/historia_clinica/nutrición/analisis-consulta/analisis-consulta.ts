import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-analisis-consulta',
  templateUrl: 'analisis-consulta.html',
})
export class AnalisisConsultaPage {
  ana:DatAnalisis;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ana={
      analisis:"",conducta:"",recomendacion:"",prioritaria:false,ordencx:false,ordenmed:false,ordenmedica:false
      ,solinsumos:false
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnalisisConsultaPage');
  }

}

export class DatAnalisis {
  analisis: string;
  conducta: string;
  recomendacion: string;
  prioritaria: boolean;
  ordencx: boolean;
  ordenmed: boolean;
  ordenmedica: boolean;
  solinsumos: boolean;
}
