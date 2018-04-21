import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  hide = true;
  userId = new FormControl('', [Validators.required]);
  userPwd = new FormControl('');

  getUserIdErrorMessage() {
    return this.userId.hasError('required') ? 'You must enter a value' :
        this.userId.hasError('userId') ? 'Not a valid userid' :
            '';
  }

  // getPasswordErrorMessage() {
  //   return this.password.hasError('required') ? 'You must enter a password' : '';
  // }

  sendToCandidateList(){
     if(this.userPwd.value == 'Welcome123!') {
         this.router.navigate(['users']);
     } else {

      	this.router.navigate(['candidates']);
     }
  }

  constructor(private route: ActivatedRoute, private router: Router, private app: AppService, private http: HttpClient) { 
  }

  ngOnInit() {
  }

  login() {
    this.app.authenticate(this.userId.value, this.userPwd.value, () => {
          this.app.loggedUserId = this.userId.value;
        // if default application password, force user to change it immediately
        if(this.userPwd.value == 'Welcome123!') {
           this.router.navigate(['passwordchange']);
        } else {
           this.router.navigate(['search']);
        }
    });
    return false;
  }

}
