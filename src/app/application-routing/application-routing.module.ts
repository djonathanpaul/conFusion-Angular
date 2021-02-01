import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {routes} from './routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  //ensuring the router module can be used by the app module
  exports:[
    RouterModule
  ]
})
export class ApplicationRoutingModule { }
