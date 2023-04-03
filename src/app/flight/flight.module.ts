import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';


@NgModule({
  declarations: [
    ViewFlightComponent,
    EditFlightComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule
  ],
  exports: [
    ViewFlightComponent,
    EditFlightComponent
  ]
})
export class FlightModule { }
