import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import {Storage} from '@ionic/storage';
//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';


import { BuscarPaPage } from '../pages/historia_clinica/buscar-pa/buscar-pa';
import { EmailPage } from '../pages/email/email';

//Registrar prestadores
import {RegistrarPrestadorPage} from '../pages/registrar-prestador/registrar-prestador';

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
      { title: 'Prestadores', component: RegistrarPrestadorPage },
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
