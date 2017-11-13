import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { HttpClientProvider } from '../../../providers/http-client/http-client';
import { Paciente } from '../../../models/paciente';
import { historiaClinica } from '../../../models/historiaClinica';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',

})
export class HistoriaPage {
  
  prin: DatPrincipales;
  paciente:Paciente;
  his:historiaClinica=[];
  constructor(public navCtrl: NavController, public params: NavParams, public menuCtrl: MenuController, public storage:Storage) {
    this.paciente = {
      nombre:"",
      edad:0,
      cedula:"",
      genero:"",
      administracion:"",
      his:this.his
    }
    this.storage.get("paciente").then( result =>{
         this.paciente = JSON.parse(result);
    }).catch( err => {
          console.log(err);
    });
    console.log("El paciente es:"+this.paciente.nombre);
    this.prin = {
      nombreAcu: "",
      parentesco: "",
      telefono: 3,
      tipoConsul: "",
      motivo: "",
      enfActual: ""
    }
  }

  toggleLeftMenu() {
    this.menuCtrl.open();
    this.menuCtrl.toggle();
  }

  toggleRightMenu() {
    this.menuCtrl.open();
    this.menuCtrl.toggle('right');
  }
}


export class DatPrincipales {
  nombreAcu: string;
  parentesco: string;
  telefono: number;
  tipoConsul: string;
  motivo: string;
  enfActual: string;
}