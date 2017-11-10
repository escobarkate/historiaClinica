import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Msj } from '../../providers/msj';
import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'page-mensaje',
  templateUrl: 'mensaje.html'
})
export class MensajePage {
  msj: Msj;
  adjunto: boolean = false; 

  constructor(public navCtrl: NavController) {
     this.msj = new Msj();
  }

  send(){
     this.navCtrl.push(HomePage);
  }

  add(){
    this.adjunto= true;
  }
}
