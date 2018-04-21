import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../user/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ChangePwdService {
 
  constructor(private http:HttpClient) {
  }

  private userUrl = 'http://localhost:8087/rts-service/v1';

  public updatePassword(user) {
    let result: Observable<any>;  
    let body = JSON.stringify(user);
    result = this.http.put('//localhost:8087/rts-service/v1/users', user);
     return result;
  }

}