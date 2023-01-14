import { Injectable } from '@angular/core';
import {privateDecrypt} from "crypto";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../user";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {



  constructor(private httpClient :HttpClient) {  }


  postUser(user :User) {
    const httpOptions ={
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.httpClient.post(environment.apiUrl+environment.registerPassagerUrl,user,httpOptions);
  };




  registerUser(user:User) : Observable<Object>{
    console.log(user);

    return this.httpClient.post(environment.apiUrl+environment.registerPassagerUrl,user);



  }
}
