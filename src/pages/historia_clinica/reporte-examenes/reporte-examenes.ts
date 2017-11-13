import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-reporte-examenes',
  templateUrl: 'reporte-examenes.html',
})
export class ReporteExamenesPage {
 icons: string[];
 items: Array<{numero: string, tipo: string, fecha: string, resultado:string}>;
 report:DatReportExamen;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.report = {
      tipo:"",
      fecha:"",
      resultado:"",
    }
    this.items = [{numero: '1 ' , tipo: 'Hemoglobina',fecha:'21/06/2017', resultado:'bien'},{numero: '2 ' , tipo: 'Hemo',fecha:'21/06/2017', resultado:'bien'}];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReporteExamenesPage');
  }

}

export class DatReportExamen{
    tipo:string;
    fecha:string;
    resultado:string;
}
