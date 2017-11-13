import { BrowserModule } from '@angular/platform-browser';
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
import { HistoriaPage } from '../pages/historia_clinica/datos-principales/historia';
import { AntFamiliaresPage } from '../pages/historia_clinica/ant-familiares/ant-familiares';
import { AntFarmacologicosPage } from '../pages/historia_clinica/ant-farmacologicos/ant-farmacologicos';
import { AntGinecoPage } from '../pages/historia_clinica/ant-gineco/ant-gineco';
import { AntPersonalesPage } from '../pages/historia_clinica/ant-personales/ant-personales';
import { DiagnosticoPage } from '../pages/historia_clinica/diagnostico/diagnostico';
import { ExamFisicoPage } from '../pages/historia_clinica/exam-fisico/exam-fisico';
import { FactProtectoresPage } from '../pages/historia_clinica/fact-protectores/fact-protectores';
import { IdRiesgosPage } from '../pages/historia_clinica/identificacion-riesgos/identificacion-riesgos';
import { MoriskyPage } from '../pages/historia_clinica/morisky/morisky';
import { NoFarmaPage } from '../pages/historia_clinica/no-farma/no-farma';
import { ObservacionesPage } from '../pages/historia_clinica/observaciones/observaciones';
import { ParaclinicosPage } from '../pages/historia_clinica/paraclinicos/paraclinicos';
import { ReporteExamenesPage } from '../pages/historia_clinica/reporte-examenes/reporte-examenes';
import { RevisionSistemasPage } from '../pages/historia_clinica/revision-sistemas/revision-sistemas';
import { SignosVitalesPage } from '../pages/historia_clinica/signos-vitales/signos-vitales';
import { SolValoracionPage } from '../pages/historia_clinica/sol-valoracion/sol-valoracion';
import { ViolenciaIntraPage } from '../pages/historia_clinica/violencia-intra/violencia-intra';
import { BuscarPacientePage,PopoverPage } from '../pages/historia_clinica/buscar-paciente/buscar-paciente';
import { BuscarPaPage } from '../pages/historia_clinica/buscar-pa/buscar-pa';
import { HistoriaClinicaData } from '../providers/historiaClinica';
import { HttpClientProvider } from '../providers/http-client/http-client';
import {NativeStorage} from '@ionic-native/native-storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MensajePage,
    HistoriaPage,
    BuscarPacientePage,
    AntFamiliaresPage,
    AntFarmacologicosPage,
    AntGinecoPage,
    AntPersonalesPage,
    DiagnosticoPage ,
    ExamFisicoPage,
    FactProtectoresPage,
    IdRiesgosPage,
    MoriskyPage,
    NoFarmaPage,
    ObservacionesPage,
    ParaclinicosPage,
    ReporteExamenesPage,
    RevisionSistemasPage,
    SignosVitalesPage,
    SolValoracionPage,
    ViolenciaIntraPage,
    BuscarPaPage,
    PopoverPage,
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MensajePage,
    HistoriaPage,
    AntFamiliaresPage,
    AntFarmacologicosPage,
    AntGinecoPage,
    AntPersonalesPage,
    DiagnosticoPage ,
    ExamFisicoPage,
    FactProtectoresPage,
    IdRiesgosPage,
    MoriskyPage,
    NoFarmaPage,
    ObservacionesPage,
    ParaclinicosPage,
    ReporteExamenesPage,
    RevisionSistemasPage,
    SignosVitalesPage,
    SolValoracionPage,
    ViolenciaIntraPage,
    BuscarPacientePage,
    BuscarPaPage,
    PopoverPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HistoriaClinicaData,    
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientProvider,
    NativeStorage
  ]
})
export class AppModule {}
