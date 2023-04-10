import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  flightDetails: any = [] = [];


  // flightName: String = "Indigo";
  // cost: Number = 3500;
  // distance: Number = 650;

  constructor(private flightService: FlightService, private titleService : Title) { 
    this.titleService.setTitle("Dashboard");
  }

  ngOnInit(): void {
    this.getFlights();
  }

  deleteFlight(id: any) {
    console.log("Printing ID: ", id);
    this.flightService.deleteFlight(id).subscribe(
      (data: any) => {
        console.log("Printing Data: ", data);
        this.getFlights();
      },
      (error) => {
        console.log("Error:", error);
      }
    );
  }
  

  trackbyFlightDetail(index: number, flightDetail: any): number {
    console.log("Printing Index and Flight Details: ", index, flightDetail)
    return flightDetail.id;
  }

  getFlights() {
    try {
      this.flightService.getFlights().subscribe((data: any) => {
        this.flightDetails = data;
        console.log("Printing Data: ", data);
      })
    } catch (error) {
      console.log("Printing Error: ", error);
    }
  }

  helloworld() {
    return "Hello World";
  }

}
