import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm, FormControl, Validators } from '@angular/forms';

import { Search } from './search.model';
import { SearchService } from './search.service';
import { SearchDetail } from './searchdetail.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  sub: Subscription;  


  constructor(private route: ActivatedRoute, private router: Router, private searchService: SearchService) {
  }

  ngOnInit() {
  }

  search(form: NgForm) {
    console.log("search ngform ");
    this.searchService.search(form).subscribe(result => {
     this.gotoList();
    }, error => console.error(error));
  }

  gotoList() {
    this.router.navigate(['/candidates']);
  }

  sendHome(){
  	this.router.navigate(['']);
  }
}
