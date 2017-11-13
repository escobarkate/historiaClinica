import { Component,ViewChild,ElementRef  } from '@angular/core';
import { Slides, NavController, NavParams ,ToastController,PopoverController } from 'ionic-angular';
import { HistoriaPage } from '../datos-principales/historia';
import { AntFamiliaresPage } from '../ant-familiares/ant-familiares';
import { AntFarmacologicosPage } from '../ant-farmacologicos/ant-farmacologicos';
import { AntPersonalesPage } from '../ant-personales/ant-personales';
import { DiagnosticoPage } from '../diagnostico/diagnostico';
import { ExamFisicoPage } from '../exam-fisico/exam-fisico';
import { FactProtectoresPage } from '../fact-protectores/fact-protectores';
import { IdRiesgosPage } from '../identificacion-riesgos/identificacion-riesgos';
import { MoriskyPage } from '../morisky/morisky';
import { NoFarmaPage } from '../no-farma/no-farma';
import { ObservacionesPage } from '../observaciones/observaciones';
import { ParaclinicosPage } from '../paraclinicos/paraclinicos';
import { ReporteExamenesPage } from '../reporte-examenes/reporte-examenes';
import { RevisionSistemasPage } from '../revision-sistemas/revision-sistemas';
import { SolValoracionPage } from '../sol-valoracion/sol-valoracion';
import { ViolenciaIntraPage } from '../violencia-intra/violencia-intra';
import { BuscarPaPage } from '../buscar-pa/buscar-pa';





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

    tab1Root = HistoriaPage;//HistoriaPage;
    tab2Root = ReporteExamenesPage ;
    tab3Root = AntFamiliaresPage;
    tab4Root = AntPersonalesPage;
    tab5Root = AntFarmacologicosPage ;
    tab6Root = MoriskyPage;
    tab7Root = ViolenciaIntraPage;
    tab8Root = RevisionSistemasPage ;
    tab9Root = ExamFisicoPage;
    tab10Root = DiagnosticoPage;
    tab11Root = ParaclinicosPage ;
    tab12Root = NoFarmaPage;
    tab13Root = FactProtectoresPage;
    tab14Root = SolValoracionPage ;
    tab15Root = IdRiesgosPage;
    tab16Root = ObservacionesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private toast: ToastController,public popoverCtrl: PopoverController) {
   
  }
   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{
      //slideEle: this.slides
    });
    popover.present({
      ev: myEvent
    });
  } 

}
