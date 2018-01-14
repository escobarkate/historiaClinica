import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {Medico} from '../../models/medico';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-registrar-prestador',
  templateUrl: 'registrar-prestador.html',
})
export class RegistrarPrestadorPage {
  medico:Medico;
  constructor(public navCtrl: NavController, public navParams: NavParams,private toast: ToastController) {
    this.medico= new Medico();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPrestadorPage');
  }
  valido(){
    let msg;
    if (this.medico.identificacion == null ||this.medico.login_usuario==null||this.medico.perfil==null ||this.medico.observacion==null
        ||this.medico.primer_nombre==null||this.medico.primer_apellido==null||this.medico.direccion==null||this.medico.celular==null
        ||this.medico.email==null||this.medico.cargo_actual==null||this.medico.registro_profesional==null||this.medico.especialidad==null
        ||this.medico.unidad_funcional==null||this.medico.departamento==null||this.medico.municipio==null||this.medico.genero==null
        ||this.medico.personal_atiende==null
    ) {
      msg = this.toast.create({ message: "Por favor ingrese todos los datos", duration: 3000 });
    }else
     {
       
      this.verificarCedula();
     }
     msg.present();

  }
  
  verificarCedula(){
    let msg;
    msg = this.toast.create({ message: "Verificando", duration: 3000 });
    msg.present();
  }
  verificarNombreU(){

  }
  guardar(){

  }

}
