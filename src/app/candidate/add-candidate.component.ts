import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormControl, Validators } from '@angular/forms';

import { Candidate } from './candidate.model';
import { CandidateService } from './candidate.service';

@Component({
  selector: 'candidate-add',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./candidate.component.scss']
})
export class AddCandidateComponent implements OnInit, OnDestroy {
  candidate: any = {};
  sub: Subscription;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  profileStatuses = [
    {value: 'never_interviewed', viewValue: 'Never Interviewed'},
    {value: 'interviewed_future', viewValue: 'Interviewed Future'},
    {value: 'interviewed_not_a_fit', viewValue: 'Interviewed - Not A Fit'},
    {value: 'hired', viewValue: 'Hired'},
  ];
  
  constructor(private route: ActivatedRoute, private router: Router, private candidateService: CandidateService) {
  }

 ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const candidateId = params['candidateId'];
      if (candidateId) {
        this.candidateService.get(candidateId).subscribe((candidate: any) => {
          if (candidate) {
            this.candidate = candidate[0];
            this.candidate = candidate.candidates[0];
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
    this.router.navigate(['/candidates']);
  }

  save(form: NgForm) {
    this.candidateService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(candidateId) {
    this.candidateService.remove(candidateId).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}