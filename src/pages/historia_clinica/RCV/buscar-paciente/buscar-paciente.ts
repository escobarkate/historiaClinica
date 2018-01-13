import { Component,ViewChild  } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Tabs, NavController, NavParams ,ToastController,PopoverController } from 'ionic-angular';
import { HistoriaPage } from '../datos-principales/historia';
import { AntFamiliaresPage } from '../ant-familiares/ant-familiares';
import { AntFarmacologicosPage } from '../ant-farmacologicos/ant-farmacologicos';
import { AntPersonalesPage } from '../ant-personales/ant-personales';
import { DiagnosticoPage } from '../diagnostico/diagnostico';
import { ExamFisicoPage } from '../exam-fisico/exam-fisico';
import { FactProtectoresPage } from '../fact-protectores/fact-protectores';
//import { IdRiesgosPage } from '../identificacion-riesgos/identificacion-riesgos';
import { MoriskyPage } from '../morisky/morisky';
import { NoFarmaPage } from '../no-farma/no-farma';
import { ObservacionesPage } from '../observaciones/observaciones';
import { ParaclinicosPage } from '../paraclinicos/paraclinicos';
import { ReporteExamenesPage } from '../reporte-examenes/reporte-examenes';
import { RevisionSistemasPage } from '../revision-sistemas/revision-sistemas';
import { SolValoracionPage } from '../sol-valoracion/sol-valoracion';
import { ViolenciaIntraPage } from '../violencia-intra/violencia-intra';

import { Paciente } from '../../../../models/paciente';
import { historiaClinica } from '../../../../models/historiaClinica';
import { HttpClientProvider } from '../../../../providers/http-client/http-client';
//import { SuperTabs, SuperTabsController } from 'ionic2-super-tabs';





@Component({
  template: `
    <ion-list>
      <button ion-item *ngFor="let item of menu ; let i = index" (click)="itemSelected(i)">
      <h6>{{ item }}</h6>
      </button>  
    </ion-list>

  `
})
export class PopoverPage {
  
  menu:string[];
  tabsEle:Tabs;
  constructor(private navParams: NavParams) {
   this.menu = ['1. Datos principales', '2.Reportes', '3.Ant. familiares', '4.Ant. Personales', 
   '5.Ant. Farmacologicos ', '6.Test de Morisky','7.Violencia intrafamiliar','8.Revision por sistemas',
     '9.Examen fisico', '10.Diagnostico', '11.Paraclinico','12.No farmacologico','13.Prom. factores protectores',
     '14.Valoracion especialista','15.Observaciones/hallazgos'];
  }

   ngOnInit() {
    if (this.navParams.data) {
      this.tabsEle = this.navParams.data.tabRef;
      //this.slideEle.slideTo(0,500);
    }
  }
 itemSelected(i:number){
       this.tabsEle.select(i);
       console.log(i);
   
 }

  
}



@Component({
  selector: 'page-buscar-paciente',
  templateUrl: 'buscar-paciente.html',
})
export class BuscarPacientePage {

  paciente: Paciente;
  historia: historiaClinica=[] ;
  cedula:string="";
  @ViewChild('popsTabs') tabRef : Tabs; 

    tab1Root = HistoriaPage;
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
    tab15Root = ObservacionesPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,  
    public http: HttpClientProvider, private toast: ToastController
    ,public popoverCtrl: PopoverController, public storage:Storage) {
    this.cedula = navParams.get('id');
    this.paciente={
      nombre:"",cedula:"",edad:0,genero:"",administracion:"",his:this.historia 
    };
    
    this.http.getByCed(this.cedula).subscribe(pac => {
      this.initializeItems(pac, null);
    }, err => {
      this.initializeItems(null, err);
    });
  }

   initializeItems(paci:Paciente, err: string){
    if(err){
      console.log(err);
    }else{
      this.paciente= paci;
      let value = JSON.stringify(this.paciente);
      console.log(value);
      this.storage.set("paciente",value);    
    }
      
  }

   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage,{
      tabRef: this.tabRef
    });
    popover.present({
      ev: myEvent
    });
  } 

}
