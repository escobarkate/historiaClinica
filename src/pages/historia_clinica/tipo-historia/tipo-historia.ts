import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscarPacientePage } from '..//RCV/buscar-paciente/buscar-paciente';
import { TabsNutricionPage } from '..//tabs-nutricion/tabs-nutricion';
import { RemisionPage } from '..//remision/remision';
import { Paciente } from '../../../models/paciente';
import { Page } from 'ionic-angular/navigation/nav-util';
import { historiaClinica } from '../../../../models/historiaClinica';
import { Storage } from '@ionic/storage';
//import { HttpClientProvider } from '../../../providers/http-client/http-client';


@Component({
  selector: 'page-tipo-historia',
  templateUrl: 'tipo-historia.html',
})
export class tipoHistoriaPage {

  searchQuery: string = '';
  items: string[];
  paginas: Page[];
  paciente:Paciente;
  pac:Paciente[]=[];
  buscar: string = "cedula";
  his:historiaClinica=[];
 // constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClientProvider) {
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage:Storage) {
    this.initializeItems();
    this.ListaPage();

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
   
  }
     initializeItems() {
      this.items = [ 'Riesgo Cardiovascular (RCV)', 'Nutricion', 'Remision'];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();
    
        // set val to the value of the ev target
        var val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
       }
  }

  ListaPage(){
    this.paginas=[BuscarPacientePage,TabsNutricionPage,RemisionPage ];
  }


  goTo(i:number) {
    
    this.navCtrl.push(this.paginas[i]);
    //this.navCtrl.push(this.paginas[i], { id: ced });
  
  }
  

}
