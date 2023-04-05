import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private flightService: FlightService, private titleService : Title) { 
    this.titleService.setTitle("Dashboard");
  }

  ngOnInit(): void {
    this.getFlights();
  }

  onClick() {
    // alert("Edit Button Clicked")
    this.router.navigate(['/edit-flight'])
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

}
