import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.scss']
})
export class ViewFlightComponent implements OnInit {

  color: String = 'white';
  flightId: any;
  flightDetails: any;

  constructor(private route: ActivatedRoute, private flightService : FlightService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log("Flight ID", params);
      this.flightId = params['id'];
    })

    this.getFlight();
  }

  getFlight(){
    try {
      this.flightService.getFlight(this.flightId).subscribe(
        (data: any) => {
        this.flightDetails = data;
        console.log("Printing Data: ", data);
      })
    } catch (error) {
      console.log("Printing Error: ", error);
    }
  }

}