import { Component,ViewChild,ElementRef  } from '@angular/core';
import { Slides, NavController, NavParams ,ToastController,PopoverController } from 'ionic-angular';
import { ObservacionesPage } from '..//observaciones/observaciones';


@Component({
  template: `
    <ion-list>
      <button ion-item *ngFor="let item of menu ; let i = index" (click)="itemSelected(i)">
      {{ item }}
      </button>  
    </ion-list>

  `
})
export class PopoverPage {
  
  menu:string[];
  slideEle:Slides;
  constructor(private navParams: NavParams) {
   this.menu = ['DATOS PRINCIPALES', 'REPORTE', 'ANTECEDENTES FAMILIARES', 'ANTECEDENTES PERSONALES', 
   'ANTECEDENTES FARMACOLOGICOS ', 'TEST DE MOSRISKY','VIOLENCIA INTRAFAMILIAR','REVISIÓN POR SISTEMAS',
     'EXAMEN FISICO', 'DIAGNOSTICO', 'PARACLINICO','TRATAMIENTO NO FARMACOLOFICO','PROMOCION DE FACTORES PROTECTORES',
     'SOLICITUD DE VALORACION POR ESPECIALISTA','IDENTIFICACION DE RIESGOS','OBSERVACIONES/HALLAZGOS'];
  }

   ngOnInit() {
    if (this.navParams.data) {
      this.slideEle = this.navParams.data.slideEle;
      //this.slideEle.slideTo(0,500);
    }
  }
 itemSelected(i:number){
       this.slideEle.slideTo(i,500);
       console.log(i);
   
 }

  
}



@Component({
  selector: 'page-buscar-paciente',
  templateUrl: 'buscar-paciente.html',
})
export class BuscarPacientePage {
    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private toast: ToastController,public popoverCtrl: PopoverController) {
   
  }
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{
      slideEle: this.slides
    });
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
