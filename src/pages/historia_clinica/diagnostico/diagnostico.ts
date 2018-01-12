import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-diagnostico',
  templateUrl: 'diagnostico.html',
})
export class DiagnosticoPage {

  diag: DatDiagnostico;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.diag = {
      diagnostico: "",
      diagr2: "",
      diagr3: "",
      diagr4: "",
      diagr5: "",
      observaciones: "",
      finalidadconsul: "",
      causaext: "",
      tipodx: ""
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticoPage');
  }

}

export class DatDiagnostico {
  diagnostico: string;
  diagr2: string;
  diagr3: string;
  diagr4: string;
  diagr5: string;
  observaciones: string;
  finalidadconsul: string;
  causaext: string;
  tipodx: string;
}