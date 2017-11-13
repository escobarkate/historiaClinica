import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { DatPrincipales } from '../../../providers/historiaClinica';

@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
  
})
export class HistoriaPage {
  
  prin:DatPrincipales;

constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
      this.prin = {
        nombreAcu:"",
        parentesco:"",
        telefono:3,
        tipoConsul:"",
        motivo:"",
        enfActual:""        
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
