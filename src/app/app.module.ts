import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { CandidateComponent } from './candidate/candidate.component';
import { AddCandidateComponent } from './candidate/add-candidate.component';
import { ChangePwdComponent } from './home/change-pwd.component';

import { UserService } from './user/user.service';
import { CandidateService } from './candidate/candidate.service';
import { AppService } from './app.service';
import { SearchService } from './search/search.service';
import { ChangePwdService } from './home/change-pwd.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    UserComponent,
    AddUserComponent,
    CandidateComponent,
    AddCandidateComponent,
    ChangePwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
 ],
  providers: [UserService, CandidateService, AppService, SearchService, ChangePwdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
