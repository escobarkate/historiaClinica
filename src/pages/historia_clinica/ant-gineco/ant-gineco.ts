import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HistoriaClinicaData } from '../../../providers/historiaClinica';



@Component({
  selector: 'page-ant-gineco',
  templateUrl: 'ant-gineco.html',
})
export class AntGinecoPage {
 HC:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntGinecoPage');
  }

}
