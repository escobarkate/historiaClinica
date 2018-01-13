import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-recordatorio-nu',
  templateUrl: 'recordatorio-nu.html',
})
export class RecordatorioNuPage {
   Obs: DatRecordatorio;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Obs={
      record1:'',record2:'',record3:'',record4:'',record5:'',record6:''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecordatorioNuPage');
  }

}

export class DatRecordatorio {
  record1: string;
  record2: string;
  record3: string;
  record4: string;
  record5: string;
  record6: string;
  
}