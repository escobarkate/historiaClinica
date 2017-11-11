import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuController } from 'ionic-angular';


@Component({
  selector: 'page-historia',
  templateUrl: 'historia.html',
  
})
export class HistoriaPage {
  
 
constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    
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
