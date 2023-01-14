import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {RegistrationService} from "../../services/registration.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  user:User = new User();

  constructor(private registerService : RegistrationService) { }

  ngOnInit(): void {
  }

    handlRegisration() {

    this.registerService.postUser(this.user).subscribe(data=>{
      alert("Welcome to the team")
        },error=>alert("sorry baqi chwiya")
    );
  }
}
