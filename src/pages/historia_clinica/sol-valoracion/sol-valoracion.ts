import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-sol-valoracion',
  templateUrl: 'sol-valoracion.html',
})
export class SolValoracionPage {
  solVal:DatSolValoracion;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.solVal={
      medicinainterna:false,
      cardiologia:false,
      endocrinologia:false,
      oftamologia:false,
      observaciones:'',
      otros:'',
      citacontrol:0,
      medicoControl:'',
      especialidad:''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SolValoracionPage');
  }

}

export class DatSolValoracion{
    medicinainterna:boolean;
    cardiologia:boolean;
    endocrinologia:boolean;
    oftamologia:boolean;
    observaciones:string;
    otros:string;
    citacontrol:number;
    medicoControl:string;
    especialidad:string;
}