import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { AuthGuard } from 'src/app/guard/auth.guard';


const routes: Routes = [
  {
    path: 'master',
    // path: '',
    component: MasterComponent,
    canActivate:[AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
