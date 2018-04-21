import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'user-add',
  templateUrl: './add-user.component.html',
  styleUrls: ['./user.component.scss']
})
export class AddUserComponent implements OnInit, OnDestroy {
  user: any = {};
  sub: Subscription;

  profileStatuses = [
    {value: 'Active', viewValue: 'Active'},
    {value: 'InActive', viewValue: 'InActive'}
  ];

  applicationRoles = [
    {value: 'Administrator', viewValue: 'Administrator'},
    {value: 'User', viewValue: 'User'}
  ];

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {

  }

 ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const userId = params['userId'];
      if (userId) {
        this.userService.get(userId).subscribe((user: any) => {
          if (user) {
            this.user = user[0];
            this.user.userId = user[0].userId;
          } else {
            this.gotoList();
          }
        });
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/users']);
  }

  save(form: NgForm) {
    this.userService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(userId) {
    this.userService.remove(userId).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}