import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpClientProvider {

  constructor(public http: Http) {
    console.log('Hello HttpClientProvider Provider');
  }

  get():Observable<>{

  }
  post(){

  }
  put(){

  }


}
