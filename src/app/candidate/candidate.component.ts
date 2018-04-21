import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Candidate } from './candidate.model';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class CandidateComponent implements OnInit {

  candidates: Candidate[];
  displayedColumns = ['firstName', 'lastName', 'status', 'candidateId'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private router: Router, private candidateService: CandidateService) {
  }

  ngOnInit() {
  	 this.candidateService.getCandidates().subscribe( data => {
  	           ELEMENT_DATA = data.candidates;
      });
  }

  
  /**
   * Set  sort after view init since this component able to query its view for the initialized sort.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  deleteCandidate(candidate: Candidate): void {
    this.candidateService.deleteCandidate(candidate)
      .subscribe( data => {
        this.candidates = this.candidates.filter(u => u !== candidate);
      })
  };


}

var ELEMENT_DATA: Candidate[];
  

  