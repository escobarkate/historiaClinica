import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { AdjuntarPage } from './adjuntar/adjuntar';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-email',
  templateUrl: 'email.html'
})
export class EmailPage {

  private to:string;   //Declaración de variables usadas para armar el 
  private cc:string;   //paquete de correo
  private bcc:string[];
  private attachments:string[];
  private subject:string;
  private body:string;
  private nameAttach:string[];

  constructor(public navCtrl: NavController, private emailComposer: EmailComposer,
  public storage:Storage) { 
     this.attachments=[];
   }
  
   ionViewDidEnter(){
    this.storage.get("fileFound").then( f => {
      this.attachments.forEach(a => {
          if(a!=f){
            this.attachments.push(f);
          }
      });
    }).catch( err => {

    });
    this.storage.get("folder").then( f => {
      this.nameAttach.forEach(a => {
          if(a!=f){
            this.nameAttach.push(f);
          }
      });
    }).catch( err => {

    });
   }
  //---------------------------FUNCIONES-------------------------------------

  //Funcion enviar correo
  send(){
    this.emailComposer.addAlias('gmail', 'com.google.android.gm'); //Declaración de alias de la app a usar para enviar
    this.emailComposer.isAvailable().then((available: boolean) =>{ 
      if(available) {
        console.log("conectó");                   //Iniciación y verificación del correcto
      }                                           //funcionamiento de la clase EmailComposer
     }).catch(()=>{
       console.log("no conectó");
     });   
     
     this.emailComposer.open({
      app: 'gmail',
      to: this.to,                                    //Armado y envio de paquete
      cc: this.cc,
      bcc: this.bcc,
      attachments: this.attachments,
      subject: "FARMALISTO"+this.subject,
      body: this.body,
      isHtml: true
    });
  }

  //Función adjuntar
  attach(){
     this.navCtrl.push(AdjuntarPage);
  }

  deleteAttach(fileDel:number){
        this.attachments.splice(fileDel);
        this.nameAttach.splice(fileDel);
  }
}
