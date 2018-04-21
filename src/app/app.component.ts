import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = '';

   constructor(private app: AppService, private http: HttpClient, private router: Router) {
       this.title = window.localStorage.getItem("loggedInUserKey");
    } 

    logout() {
       window.localStorage.setItem("loggedInUserKey", "");
       this.title = '';
     
      this.http.post('logout', {}).finally(() => {
          this.app.authenticated = false;
          this.title = '';
         this.router.navigateByUrl('/login');
      }).subscribe();
    }

    isAuthentocated() {
    	return !this.app.authenticated;
    }

}



