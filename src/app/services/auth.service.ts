import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 email :string;
 password : string;

  constructor(private http : HttpClient ) { }

  login(email: string,password :string ) {
      console.log("service");
   return this.http.get( 'http://localhost:8080/login',
       {headers : {autorization :this.createBasicAuthToken(email,password)}}

       ).pipe(map((res) => {
       console.log("service");
           this.email = email;
           this.password = password;
           this.registerSuccessfulLogin(email,password);
   }));

  }

    private registerSuccessfulLogin(email: string, password: string) {
        return 'Basic' + window.btoa(email + ":" + password);
    }

    private createBasicAuthToken(email: string, password: string) {
        return undefined;
    }
}
