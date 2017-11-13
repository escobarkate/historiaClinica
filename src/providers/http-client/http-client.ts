import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Paciente } from '../../models/paciente';
import { Medico } from '../../models/medico';


@Injectable()
export class HttpClientProvider {

  constructor(public http: Http) {
    console.log('Hello HttpClientProvider Provider');
  }

  getAll():Observable<Paciente[]>{
    return this.http.get("https://ionic-jpa-farmalisto.herokuapp.com/pacientes").map(this.proccessResponse).catch(this.proccessCatch);
  }
  getByCed(id:string):Observable<Paciente>{
    return this.http.get("https://ionic-jpa-farmalisto.herokuapp.com/pacientes/"+id).map(this.proccessResponse).catch(this.proccessCatch);
  }
  postPaciente(pa:Paciente):Observable<boolean>{
    return this.http.post("https://ionic-jpa-farmalisto.herokuapp.com/pacientes",pa).map(this.proccessInsert).catch(this.proccessCatch);
  }
  putPaciente(v:any):Observable<boolean>{
        return this.http.put("https://ionic-jpa-farmalisto.herokuapp.com/pacientes",v).map(this.proccessInsert).catch(this.proccessCatch);
  }

  getAllDoctors():Observable<Medico[]>{
    return this.http.get("https://ionic-jpa-farmalisto.herokuapp.com/pacientes").map(this.proccessResponse).catch(this.proccessCatch);
  }
  private proccessResponse(response:Response){
      let respuesta = response.json();
      return respuesta;
  }
    private proccessInsert(response:Response){
      let success = response.json();
      return success.success;
  }
    private proccessCatch(){
          return "err";
    }
}
