import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    data : Date = new Date();
    focus;
    focus1;

    email : string;
    password :string;
    errorMe :"Données Incorrectes";
    successMe : string;
    invalidLogin : boolean = false;
    loginsucess : boolean = false;


    constructor(private authService : AuthService) { }


    handlLogin(){
        console.log("handleLogin");
        this.authService.login(this.email,this.password).subscribe((result) => {
            this.invalidLogin= false;
            this.loginsucess = true;
            this.successMe ="Login successful";


        }, ()=> {
            this.loginsucess =false;
            this.invalidLogin = true;
            }
            )
    }
    ngOnInit() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    }
    ngOnDestroy(){
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    }

}
