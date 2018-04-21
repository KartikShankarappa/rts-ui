import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { ChangePwdService } from './change-pwd.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'pwd-home',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.scss']
})

export class ChangePwdComponent implements OnInit {
  hide = true;
  userPwd = new FormControl('', [Validators.required]);
  userPwdMatch = new FormControl('');

  updatePassword(){
     let user = new User;
  
        user.userId = window.localStorage.getItem("loggedInUserKey");

         user.password = this.userPwd.value;
         this.changePwdService.updatePassword(user);
         this.router.navigate(['']);
  }

  home(){
    this.router.navigate(['']);
  }

  constructor(private route: ActivatedRoute, private router: Router, private changePwdService: ChangePwdService) { 
  }

  ngOnInit() {
  }

}
