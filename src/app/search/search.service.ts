import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Search } from './search.model';
import { SearchDetail } from './searchdetail.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SearchService {
  
  constructor(private http:HttpClient) {
  }
  
  search(search: any): Observable<any> {
    let result: Observable<any>;
    result = this.http.post('//localhost:8087/rts-service/v1/candidates/search', search);
    return result;
  }

 }