import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = false;
  loggedUserId = '';

  constructor(private http: HttpClient) {
  }

  authenticate(userId, userPwd, callback) {
         
         this.loggedUserId = userId;
        const headers = new HttpHeaders(userId ? {authorization : 'Basic ' + btoa(userId + ':' + userPwd)} : {});
         this.loggedUserId = userId;

        this.http.get('//localhost:8087/rts-service/v1/user', {headers: headers}).subscribe(response => {
            if (response['name']) {
                window.localStorage.setItem("loggedInUserKey", this.loggedUserId);
                this.authenticated = true;
            } else {
              window.localStorage.setItem("loggedInUserKey", "");
               this.authenticated = false;
           }

            return callback && callback();
        });

    }

}