import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {Storage} from '@ionic/storage';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

//RCV
import { MensajePage } from '../pages/mensaje/mensaje';
import { HistoriaPage } from '../pages/historia_clinica/RCV/datos-principales/historia';
import { AntFamiliaresPage } from '../pages/historia_clinica/RCV/ant-familiares/ant-familiares';
import { AntFarmacologicosPage } from '../pages/historia_clinica/RCV/ant-farmacologicos/ant-farmacologicos';
import { AntGinecoPage } from '../pages/historia_clinica/RCV/ant-gineco/ant-gineco';
import { AntPersonalesPage } from '../pages/historia_clinica/RCV/ant-personales/ant-personales';
import { DiagnosticoPage } from '../pages/historia_clinica/RCV/diagnostico/diagnostico';
import { ExamFisicoPage } from '../pages/historia_clinica/RCV/exam-fisico/exam-fisico';
import { FactProtectoresPage } from '../pages/historia_clinica/RCV/fact-protectores/fact-protectores';
import { IdRiesgosPage } from '../pages/historia_clinica/RCV/identificacion-riesgos/identificacion-riesgos';
import { MoriskyPage } from '../pages/historia_clinica/RCV/morisky/morisky';
import { NoFarmaPage } from '../pages/historia_clinica/RCV/no-farma/no-farma';
import { ObservacionesPage } from '../pages/historia_clinica/RCV/observaciones/observaciones';
import { ParaclinicosPage } from '../pages/historia_clinica/RCV/paraclinicos/paraclinicos';
import { ReporteExamenesPage } from '../pages/historia_clinica/RCV/reporte-examenes/reporte-examenes';
import { RevisionSistemasPage } from '../pages/historia_clinica/RCV/revision-sistemas/revision-sistemas';
import { SignosVitalesPage } from '../pages/historia_clinica/RCV/signos-vitales/signos-vitales';
import { SolValoracionPage } from '../pages/historia_clinica/RCV/sol-valoracion/sol-valoracion';
import { ViolenciaIntraPage } from '../pages/historia_clinica/RCV/violencia-intra/violencia-intra';
import { BuscarPacientePage,PopoverPage } from '../pages/historia_clinica/RCV/buscar-paciente/buscar-paciente';
import { BuscarPaPage } from '../pages/historia_clinica/buscar-pa/buscar-pa';
import { EmailPage } from '../pages/email/email';


//BUSCAR HISTORIA
import {tipoHistoriaPage } from '../pages/historia_clinica/tipo-historia/tipo-historia';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = BuscarPaPage;

  pages: Array<{title: string, component: any}>;

  pagesHC: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      // { title: 'Mensaje', component: MensajePage },
      // { title: 'Historia', component: HistoriaPage },
      // { title: 'Buscar Paciente', component: BuscarPacientePage },
      { title: 'Buscar Paciente', component: BuscarPaPage },
      { title: 'Enviar mensaje', component: EmailPage },
      { title: 'Tipo Historia', component: tipoHistoriaPage },
    ];

    this.pagesHC = [
      { title: 'Datos principales', component: HistoriaPage  },
      { title: 'Reporte examenes', component: ReporteExamenesPage },
      { title: 'Antecedentes familiares', component: AntFamiliaresPage },
      { title: 'Antecedentes personales', component: AntPersonalesPage },
      { title: 'Antecedentes farmacologicos', component: AntFarmacologicosPage },
      { title: 'Test de Morisky-Green-Levine', component: MoriskyPage },
      { title: 'Violencia intrafamiliar', component: ViolenciaIntraPage },
      { title: 'Revision por sistemas', component: RevisionSistemasPage },
      { title: 'Signos vitales/Medidas ant.', component: SignosVitalesPage },    
      { title: 'Examen fisico', component: ExamFisicoPage },
      { title: 'Diagnostico', component: DiagnosticoPage } ,
      { title: 'Paraclinicos(Solicitados)', component: ParaclinicosPage },
      { title: 'Tratamiento no farmacologico', component: NoFarmaPage },
      { title: 'Promocion de factores protectores ', component: FactProtectoresPage },
      { title: 'Solicitud de valoracion por especialista', component: SolValoracionPage },
      { title: 'Identificación de riesgos', component: IdRiesgosPage },
      { title: 'Observaciones/Hallazgos', component: ObservacionesPage },      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
