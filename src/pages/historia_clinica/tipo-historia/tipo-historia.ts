import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BuscarPacientePage } from '..//RCV/buscar-paciente/buscar-paciente';
import { TabsNutricionPage } from '..//tabs-nutricion/tabs-nutricion';
import { RemisionPage } from '..//remision/remision';
import { Paciente } from '../../../models/paciente';
import { Page } from 'ionic-angular/navigation/nav-util';
//import { HttpClientProvider } from '../../../providers/http-client/http-client';


@Component({
  selector: 'page-tipo-historia',
  templateUrl: 'tipo-historia.html',
})
export class tipoHistoriaPage {

  searchQuery: string = '';
  items: string[];
  paginas: Page[];

  pac:Paciente[]=[];
  buscar: string = "cedula";
 // constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClientProvider) {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeItems();
    this.ListaPage();
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
