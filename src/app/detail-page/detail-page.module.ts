import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailPageRoutingModule } from './detail-page-routing.module';
import { DetailPageComponent } from './detail-page.component';


@NgModule({
  declarations: [
    DetailPageComponent
  ],
  imports: [
    CommonModule,
    DetailPageRoutingModule
  ]
})
export class DetailPageModule { }
