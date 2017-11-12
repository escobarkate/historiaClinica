import { Component,ViewChild } from '@angular/core';
import { Slides, NavController, NavParams ,ToastController,PopoverController } from 'ionic-angular';
import { ObservacionesPage } from '..//observaciones/observaciones';





@Component({
  selector: 'page-buscar-paciente',
  templateUrl: 'buscar-paciente.html',
})
export class BuscarPacientePage {
    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private toast: ToastController,public popoverCtrl: PopoverController) {
  }
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(ObservacionesPage);
    popover.present({
      ev: myEvent
    });
  }
  goToSlide( ) {
    this.slides.slideTo(1, 500);
  }
   slideChanged() {
     let msg;
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
     msg = this.toast.create({ message: "Pantalla" +currentIndex, duration: 3000 });
  }
  
  

}
