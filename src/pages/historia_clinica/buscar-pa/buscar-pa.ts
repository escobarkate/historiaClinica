import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HistoriaPage } from '..//datos-principales/historia';
import { Paciente } from '../../../models/paciente';
import { HttpClientProvider } from '../../../providers/http-client/http-client';


@Component({
  selector: 'page-buscar-pa',
  templateUrl: 'buscar-pa.html',
})
export class BuscarPaPage {

  searchQuery: string = '';
  nombres: string[]=[];
  cedulas: string[]=[];
  pac:Paciente[]=[];
  buscar: string = "cedula";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClientProvider) {
    this.http.getAll().subscribe(paci => {
      this.initializeItems(paci,null);
    }, err =>{
      this.initializeItems(null,err);
    });
  }
     initializeItems(pa:Paciente[],err:string) {
      this.pac = pa;
  }

  getItemsN(ev) {
    // Reset items back to all of the items
    this.http.getAll().subscribe(paci => {
      this.initializeItems(paci,null);
    }, err =>{
      this.initializeItems(null,err);
    });

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.pac = this.pac.filter((item) => {
        return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getItemsC(ev) {
    // Reset items back to all of the items
    this.http.getAll().subscribe(paci => {
      this.initializeItems(paci,null);
    }, err =>{
      this.initializeItems(null,err);
    });
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.pac = this.pac.filter((item) => {
        return (item.cedula.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  goToDatosP() {
    //this.navCtrl.setRoot(HistoriaPage);
    this.navCtrl.push(HistoriaPage);
  
  }
  

}
