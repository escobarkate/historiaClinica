import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BuscarPaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-buscar-pa',
  templateUrl: 'buscar-pa.html',
})
export class BuscarPaPage {
  searchQuery: string = '';
  nombres: string[];
  cedulas: string[];
  paciente: Array<{cedula: string, nombre: string}>;
  buscar: string = "cedula";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.initializeItems();
  }
     initializeItems() {
      // this.paciente=[{cedula: '1 ' , nombre: 'Mauricio Velez'},{cedula: '123' , nombre: 'Lorena Reyes'}];
   this.nombres = [
      'Karina Lopez',
      'Felipe Torres',
      'Katherin Escobar'   
    ];
    this.cedulas = [
      '123',
      '413',
      '127'   
    ];
  }

  getItemsN(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.nombres = this.nombres.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  getItemsC(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.cedulas = this.cedulas.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  

}
