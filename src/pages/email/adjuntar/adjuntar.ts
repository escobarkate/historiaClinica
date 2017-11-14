import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-adjuntar',
  templateUrl: 'adjuntar.html',
})


export class AdjuntarPage {

      
      items:item[];
      pathActual:string;
      folderActual:string;
      fileSelected:string;
     

      //Constructor con inicialización de archivos para mostrar
      constructor(public navCtrl: NavController, public navParams: NavParams, 
        private file: File, public toastCtrl: ToastController, 
        public storage:Storage) {
          this.initializeItems("/data/user/0", "io.ionic.starter", "");
      }

      //------------------------------FUNCIONES-----------------------------------
     
      /*Funcion inicializar archivos en la dirección enviada como parámetro,
      se llama cada vez que se cambia la busqueda o se selecciona una carpeta*/
      initializeItems(direccion:string, folder:string, filefound:string) {
        if(filefound=='folder'){
          this.items=[];
          this.pathActual=direccion;
          this.folderActual=folder;
        //Implementación de listar archivos en el directorio
          this.file.listDir("file://"+direccion, folder).then( result =>{
            result.forEach(i => {
              let obj;
              let borrar = i.name.length+1;
              if(i.isDirectory){
                  obj = { 
                  name:i.name,            
                  path:i.fullPath.substring(0,i.fullPath.length-borrar),        
                  icon:"folder"           //Determinar si es una carpeta
                }                         //o un archivo para mostrar icono 
              }else{                      //adecuado
                 obj = { 
                 name:i.name,
                 path:i.fullPath.substring(0,i.fullPath.length-borrar),
                 icon:"document"
                 }
              }
            /*Añadir datos (nombre,direccion,icono) a un array
            para su posterior tratamiento*/ 
                this.items.push(obj);
            });
          }).catch( err => {              //En caso de error que lo imprima en pantalla
              console.log("Error:"+err);
          });
        }else{
              this.storage.set("fileFound","file://"+direccion+folder);
              this.storage.set("folder",folder);
              this.navCtrl.pop();
        }
      }

      //Función de busqueda al escribir en el searchbar
      getItems(ev: any) {
      
        // capturar valor de busqueda en variable val
        let val = ev.target.value; 
    
        // Si el valor es un string vacio no filtra los elementos
        if (val && val.trim() != '') {
          this.items = this.items.filter((nam) => {
            return (nam.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }else{
          this.initializeItems(this.pathActual,this.folderActual, "");
        }
      }
}

//Modelo item que se va a utilizar para parametrizar datos necesarios
export class item {
          name:string;
          path:string;
          icon:string;
}
