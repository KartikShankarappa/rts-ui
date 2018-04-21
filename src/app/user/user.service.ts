import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  
  constructor(private http:HttpClient) {
  }

 getUsers(): Observable<any> {
     let result: Observable<any>;
     result = this.http.get('//localhost:8087/rts-service/v1/users');  
      return result;
    //return this.http.get('//localhost:8087/rts-service/v1/users');   
  }

  get(userId: string) {
    return this.http.get('//localhost:8087/rts-service/v1/users/' + userId);
  }

  save(user: any): Observable<User> {

    let result: Observable<any>;
  
    if (user['userId']) {
      result = this.http.put('//localhost:8087/rts-service/v1/users', null, null);
    } else {
      result = this.http.post('//localhost:8087/rts-service/v1/users', user);
    }
    return result;
  }

  remove(userId: string) {
    return this.http.delete(userId);
  }

  public deleteUser(userId) {
    return this.http.delete('//localhost:8087/rts-service/v1/users/' + userId);
  }

  public updatePassword(user) {
    return this.http.put('//localhost:8087/rts-service/v1/users/', user);
  }

}