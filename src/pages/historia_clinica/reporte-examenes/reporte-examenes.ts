import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-reporte-examenes',
  templateUrl: 'reporte-examenes.html',
})
export class ReporteExamenesPage {
  icons: string[];
  items: Array<{ numero: number, tipo: string, fecha: string, resultado: string }>;
  report: DatReportExamen;
  i: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.items = [];
    this.initReport();
  }
  initReport(){
    this.report = {
      tipo: "",
      fecha: "",
      resultado: "",
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReporteExamenesPage');
  }

  Agregar(tip: string, fec: string, res: string) {
    this.i++;
    this.initReport();
    this.items.push({
      numero: this.i,
      tipo: tip,
      fecha: fec,
      resultado: res
    });
    
  }

}



export class DatReportExamen {
  tipo: string;
  fecha: string;
  resultado: string;
}
