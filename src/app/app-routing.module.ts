import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './components/local/local.component';
import { AuthGuard } from './guard/auth.guard';
import { PopupComponent } from './components/popup/popup.component';
import { SessionComponent } from './components/session/session.component';
import { RLoginComponent } from './components/r-login/r-login.component';
import { TLoginComponent } from './components/t-login/t-login.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { PasswordConfirmpasswordComponent } from './components/password-confirmpassword/password-confirmpassword.component';
import { TakeUntilComponent } from './Observable-operators/take-until/take-until.component';
import { Child2Component } from './components/parent1/child2.component';
import { Parent3Component } from './components/parent3/parent3.component';
import { ShallowDeepComponent } from './components/shallow-deep/shallow-deep.component';


const routes: Routes = [
  {
    path: 'master', canActivate: [AuthGuard],
    loadChildren: () => import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path: 'local',
    component: LocalComponent
  },

  {
    path: 'popup',
    component: PopupComponent
  },
  {
    path: 'session',
    component: SessionComponent

  },
  {
    path: 'r-login',
    component: RLoginComponent
  },
  {
    path: 't-login',
    component: TLoginComponent
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent
  },



  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialDetailsComponent },
  { path: 'add', component: AddTutorialComponent },




  {
    path: 'password-confirmpassword',
    component:PasswordConfirmpasswordComponent
  },
  {
    path:'take-until',
    component:TakeUntilComponent
  },
  {
    path:'child2',
    component:Child2Component
  },
  {
    path:'parent3',
    component:Parent3Component
  },
  {
    path:'shallow-deep',
    component:ShallowDeepComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
