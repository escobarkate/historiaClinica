
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MensajePage } from '../pages/mensaje/mensaje';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
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
import { HistoriaClinicaData } from '../providers/historiaClinica';
import { HttpClientProvider } from '../providers/http-client/http-client';
import {NativeStorage} from '@ionic-native/native-storage';
//import { File } from '@ionic-native/file';
import { ElasticDirective } from '../directives/elastic/elastic';
import { EmailComposer } from '@ionic-native/email-composer';
import { EmailPage } from '../pages/email/email';
import { AdjuntarPage } from '../pages/email/adjuntar/adjuntar';
import { BrowserModule } from '@angular/platform-browser';

//Tabs
import { SuperTabsModule } from 'ionic2-super-tabs';

import {tipoHistoriaPage } from '../pages/historia_clinica/tipo-historia/tipo-historia';

//NUTRICIÓN
import { TabsNutricionPage, PopoverPage2} from '../pages/historia_clinica/tabs-nutricion/tabs-nutricion';
import {MotivoConsulNuPage} from '../pages/historia_clinica/nutrición/motivo-consul-nu/motivo-consul-nu';
import {EnfActualNuPage} from '../pages/historia_clinica/nutrición/enf-actual-nu/enf-actual-nu';
import{MedidasAntPage} from '../pages/historia_clinica/nutrición/medidas-ant/medidas-ant';
import { RecordatorioNuPage} from '../pages/historia_clinica/nutrición/recordatorio-nu/recordatorio-nu';
import { ProblemasActualesPage} from '../pages/historia_clinica/nutrición/problemas-actuales/problemas-actuales';
import { AnalisisConsultaPage } from '../pages/historia_clinica/nutrición/analisis-consulta/analisis-consulta';
//REMI
import { RemisionPage} from '../pages/historia_clinica/remision/remision';

//import { historiaNutricionalPage } from '../pages/historia_clinica/HCnutricional/historia_nutricional/historia_nutricional';



@NgModule({
  declarations: [
    MyApp,HomePage, ListPage, MensajePage,
    //RCV
    HistoriaPage,AntFamiliaresPage, AntFarmacologicosPage,AntGinecoPage,AntPersonalesPage, DiagnosticoPage ,
    ExamFisicoPage,FactProtectoresPage,IdRiesgosPage,MoriskyPage,NoFarmaPage,ObservacionesPage, ParaclinicosPage,
    ReporteExamenesPage,RevisionSistemasPage, SignosVitalesPage,SolValoracionPage,ViolenciaIntraPage,
    BuscarPacientePage, BuscarPaPage,PopoverPage,EmailPage, AdjuntarPage,tipoHistoriaPage,
    //NUTRICION
    MotivoConsulNuPage,EnfActualNuPage,MedidasAntPage,RecordatorioNuPage,ProblemasActualesPage,AnalisisConsultaPage,
    TabsNutricionPage,PopoverPage2,
    //Remision
    RemisionPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,HomePage,ListPage,MensajePage,
    //RCV
    HistoriaPage,AntFamiliaresPage, AntFarmacologicosPage,AntGinecoPage,AntPersonalesPage, DiagnosticoPage ,
    ExamFisicoPage,FactProtectoresPage,IdRiesgosPage,MoriskyPage,NoFarmaPage,ObservacionesPage, ParaclinicosPage,
    ReporteExamenesPage,RevisionSistemasPage, SignosVitalesPage,SolValoracionPage,ViolenciaIntraPage,
    BuscarPacientePage, BuscarPaPage,PopoverPage,EmailPage, AdjuntarPage,tipoHistoriaPage,
    //NUTRICION
    MotivoConsulNuPage,EnfActualNuPage,MedidasAntPage,RecordatorioNuPage,ProblemasActualesPage,AnalisisConsultaPage,
    TabsNutricionPage,PopoverPage2,
    //Remision
    RemisionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HistoriaClinicaData,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientProvider,
    NativeStorage,
    EmailComposer,
  ]
})
export class AppModule {}
