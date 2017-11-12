import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-revision-sistemas',
  templateUrl: 'revision-sistemas.html',
})
export class RevisionSistemasPage {
  //  icons: string[];
  //  items: Array<{title: string, model: string}>;
  //  name:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //  this.icons = ['ORL', 'S. RESPIRATORIO', 'S.CARDIOVASCULAR', 'S. GASTROINTESTINAL', 'S. GENITOURINARIO', 'S.OSTEOMUSCULAR',
    // 'S. NERVIOSO', 'S.ENDOCRINO', 'PIEL Y FANERAS'];

    // this.items = [];
    // for (let i = 1; i < 10; i++) {
    //   this.name=this.icons[i];
    //   this.items.push({
    //     title: this.name+'' ,
    //     model: 'revision'+i
    //   });
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RevisionSistemasPage');
  }

}
