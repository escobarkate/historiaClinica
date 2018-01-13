import { Component , ViewChild} from '@angular/core';
import { Tabs, NavController, NavParams,PopoverController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//Modelos
import { Paciente } from '../../../models/paciente';
import { historiaClinica } from '../../../models/historiaClinica';
import { HttpClientProvider } from '../../../providers/http-client/http-client';
//formularios nutrición
import {MotivoConsulNuPage} from '../nutrición/motivo-consul-nu/motivo-consul-nu';
import {EnfActualNuPage} from '../nutrición/enf-actual-nu/enf-actual-nu';
import {MedidasAntPage} from '../nutrición/medidas-ant/medidas-ant';
import {ReporteExamenesPage} from '../RCV/reporte-examenes/reporte-examenes';
import {RecordatorioNuPage} from '../nutrición/recordatorio-nu/recordatorio-nu';
import {AntPersonalesPage} from '../RCV/ant-personales/ant-personales';
import {AntFamiliaresPage} from '../RCV/ant-familiares/ant-familiares';
import {ProblemasActualesPage} from '../nutrición/problemas-actuales/problemas-actuales';
import {AntGinecoPage} from '../RCV/ant-gineco/ant-gineco';
import {AntFarmacologicosPage} from '../RCV/ant-farmacologicos/ant-farmacologicos';
import {DiagnosticoPage} from '../RCV/diagnostico/diagnostico';
import {AnalisisConsultaPage} from '../nutrición/analisis-consulta/analisis-consulta';
import {RevisionSistemasPage} from '../RCV/revision-sistemas/revision-sistemas';
import {ExamFisicoPage} from '../RCV/exam-fisico/exam-fisico';
import {SolValoracionPage} from '../RCV/sol-valoracion/sol-valoracion';

@Component({
  selector: 'page-tabs-nutricion',
  templateUrl: 'tabs-nutricion.html',
})
export class TabsNutricionPage {

  paciente: Paciente;
  historia: historiaClinica=[] ;
  cedula:string="";
  @ViewChild('popsTabs') tabRef : Tabs; 


    
    tab2Root = EnfActualNuPage;
    tab3Root = MedidasAntPage;
    tab4Root = ReporteExamenesPage;
    tab5Root = RecordatorioNuPage ;
    tab6Root = AntPersonalesPage;
    tab7Root = AntFamiliaresPage;
    tab8Root = ProblemasActualesPage ;
    tab9Root = AntGinecoPage;
    tab10Root = AntFarmacologicosPage;
    tab11Root = DiagnosticoPage ;
    tab12Root = AnalisisConsultaPage;
    tab13Root = RevisionSistemasPage;
    tab14Root = ExamFisicoPage ;
    tab15Root = SolValoracionPage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,  
    public http: HttpClientProvider, public popoverCtrl: PopoverController, public storage:Storage) {
    // this.cedula = navParams.get('id');
    // this.paciente={
    //   nombre:"",cedula:"",edad:0,genero:"",administracion:"",his:this.historia 
    // };
    
    // this.http.getByCed(this.cedula).subscribe(pac => {
    //   this.initializeItems(pac, null);
    // }, err => {
    //   this.initializeItems(null, err);
    // });
  }

  //  initializeItems(paci:Paciente, err: string){
  //   if(err){
  //     console.log(err);
  //   }else{
  //     this.paciente= paci;
  //     let value = JSON.stringify(this.paciente);
  //     console.log(value);
  //     this.storage.set("paciente",value);    
  //   }
      
  // }

   presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage2,{
      tabRef: this.tabRef
    });
    popover.present({
      ev: myEvent
    });
  } 

}

//CREACION POPOVERPAGE(MENÚ LATERAL DERECHO)
@Component({
  template: `
    <ion-list>
      <button ion-item *ngFor="let item of menu ; let i = index" (click)="itemSelected(i)">
      <h6>{{ item }}</h6>
      </button>  
    </ion-list>

  `
})
export class PopoverPage2 {
  
  menu:string[];
  tabsEle:Tabs;
  constructor(private navParams: NavParams) {
   this.menu = ['1.Motivo consulta', '2.Medidas antropometricas', '3.Reporte examenes', 
   '4.Recordatorio 24h ', '5.Ant. personales','6.Ant. familiares','7.Problemas actuales',
     '8.Ant. Gineco-obstetricos', '9.Ant farmacologicos', '10.Diagnostico nutricional','11.Análisis y consulta',
     '12.Revisión por sistemas','13.Examen fisico','14.Valoracion por especialista'];
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

