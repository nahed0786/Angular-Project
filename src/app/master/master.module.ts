import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { MasterComponent } from './master.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Child1Component,
    Child2Component,
    MasterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule {
  constructor(){
    console.log('Master Module loaded');
    
  }
 }
