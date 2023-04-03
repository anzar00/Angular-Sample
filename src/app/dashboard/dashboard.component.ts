import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  flightDetails: any = [] = [
    {
      flightName: "Indigo",
      location:{
        from: "Bangalore",
        to: "Hyderabad",
      },
      cost: 3500,
      distance: 650,
      availability: true,
    },
    {
      flightName: "Air India",
      location:{
        from: "Delhi",
        to: "Hyderabad",
      },
      cost: 3500,
      distance: 950,
      availability: false,
    },
    {
      flightName: "Spice Jet",
      location:{
        from: "Bangalore",
        to: "Delhi",
      },
      cost: 7500,
      distance: 1500,
      availability: false
    },
    {
      flightName: "Air Asia",
      location:{
        from: "Bangalore",
        to: "Hyderabad",
      },
      cost: 3500,
      distance: 650,
      availability: true,
    },
    {
      flightName: "Vistara",
      location:{
        from: "Bangalore",
        to: "Hyderabad",
      },
      cost: 3500,
      distance: 650,
      availability: true,
    }
  ];


  // flightName: String = "Indigo";
  // cost: Number = 3500;
  // distance: Number = 650;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert("Edit Button Clicked")
  }

  trackbyFlightDetail(index: number, flightDetail: any): number {
    console.log("Printing Index and Flight Details: ", index, flightDetail) 
    return flightDetail.id;
  }

}
