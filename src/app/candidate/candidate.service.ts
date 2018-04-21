import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Candidate } from './candidate.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CandidateService {
  
  constructor(private http:HttpClient) {
  }

  getCandidates(): Observable<any> {
    return this.http.get('//localhost:8087/rts-service/v1/candidates');   
  }

  get(candidateId: string) {
    return this.http.get('//localhost:8087/rts-service/v1/candidates/' + candidateId);
  }

  save(candidate: any): Observable<Candidate> {

    let result: Observable<any>;
    candidate.href = candidate.candidateId;
  
    if (candidate['candidateId']) {
      result = this.http.put('//localhost:8087/rts-service/v1/candidates', null, null);
    } else {
      result = this.http.post('//localhost:8087/rts-service/v1/candidates', candidate);
    }
    return result;
  }

  remove(candidateId: string) {
    return this.http.delete(candidateId);
  }

  public deleteCandidate(candidate) {
    return this.http.delete('//localhost:8087/rts-service/v1/candidates/' + candidate.id);
  }
}