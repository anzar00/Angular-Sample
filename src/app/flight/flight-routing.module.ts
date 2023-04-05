import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFlightComponent } from './edit-flight/edit-flight.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';
import { AddFlightComponent } from './add-flight/add-flight.component';

const routes: Routes = [
  {
    path: '',
    component: EditFlightComponent
  },
  {
    path: 'edit-flight',
    component: EditFlightComponent
  },
  {
    path: 'view-flight',
    component: ViewFlightComponent
  },
  {
    path: 'add-flight',
    component: AddFlightComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
