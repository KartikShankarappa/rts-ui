import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';

import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'users-view',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  displayedColumns = ['userFullName', 'userId', 'role', 'status'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {
  	 this.userService.getUsers().subscribe( data => {
        ELEMENT_DATA = data.users;
      });
  }

  
  /**
   * Set  sort after view init since this component able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };


}

// const usersArray: User[];
var ELEMENT_DATA: User[];
