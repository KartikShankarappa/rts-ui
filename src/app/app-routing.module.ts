import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user.component';
import { CandidateComponent } from './candidate/candidate.component';
import { AddCandidateComponent } from './candidate/add-candidate.component';
import { ChangePwdComponent } from './home/change-pwd.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	{
		path: 'search',
		component: SearchComponent
	},
	{
		path: 'users',
		component: UserComponent
	},
	{
		path: 'add-user',
		component: AddUserComponent
	},
	{
		path: 'edit-user/:userId',
		component: AddUserComponent
	},
	{
		path: 'candidates',
		component: CandidateComponent
	},
	{
		path: 'add-candidate',
		component: AddCandidateComponent
	},
	{
		path: 'edit-candidate/:candidateId',
		component: AddCandidateComponent
	},
	{
		path: 'passwordchange',
		component: ChangePwdComponent
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

