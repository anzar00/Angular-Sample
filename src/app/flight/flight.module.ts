import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlightRoutingModule } from './flight-routing.module';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';


@NgModule({
  declarations: [
    ViewFlightComponent,
    EditFlightComponent,
    AddFlightComponent
  ],
  imports: [
    CommonModule,
    FlightRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ViewFlightComponent,
    EditFlightComponent
  ]
})
export class FlightModule { }
