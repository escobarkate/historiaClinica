import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MensajePage } from '../pages/mensaje/mensaje';
import { HistoriaPage } from '../pages/historia_clinica/historia';
import { AntFamiliaresPage } from '../pages/historia_clinica/ant-familiares/ant-familiares';
import { AntFarmacologicosPage } from '../pages/historia_clinica/ant-farmacologicos/ant-farmacologicos';
import { AntGinecoPage } from '../pages/historia_clinica/ant-gineco/ant-gineco';
import { AntPersonalesPage } from '../pages/historia_clinica/ant-personales/ant-personales';
import { DiagnosticoPage } from '../pages/historia_clinica/diagnostico/diagnostico';
import { ExamFisicoPage } from '../pages/historia_clinica/exam-fisico/exam-fisico';
import { FactProtectoresPage } from '../pages/historia_clinica/fact-protectores/fact-protectores';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  pagesHC: Array<{title: string, component: any}>;


  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Mensaje', component: MensajePage },
      { title: 'Historia', component: HistoriaPage }
    ];

    this.pagesHC = [
      { title: 'Home', component: HomePage },
      
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
