import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-medidas-ant',
  templateUrl: 'medidas-ant.html',
})
export class MedidasAntPage {
  antro: DatMedidasAntro;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.antro={
      peso:0,talla:0,imc:0,clasimc:'',perimetro:0,clasiabdo:''
    };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedidasAntPage');
  }

}
export class DatMedidasAntro {
  peso:number;
  talla:number;
  imc:number;
  clasimc:string;
  perimetro:number;
  clasiabdo:string;
  
}
