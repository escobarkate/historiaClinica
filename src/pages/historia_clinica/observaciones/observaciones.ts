import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-observaciones',
  templateUrl: 'observaciones.html',
})
export class ObservacionesPage {
  Obs: DatObservaciones;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    this.Obs= {
      observaciones:"",
      remision:"",
      analisis:""
    };
  }

  ionViewDidLoad() {
    
  }
  
}

export class DatObservaciones {
   observaciones: string;
   remision: string;
   analisis: string;
}