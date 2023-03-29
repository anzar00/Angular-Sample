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
    },
    {
      flightName: "Air India",
      location:{
        from: "Delhi",
        to: "Hyderabad",
      },
      cost: 3500,
      distance: 950,
    },
    {
      flightName: "Spice Jet",
      location:{
        from: "Bangalore",
        to: "Delhi",
      },
      cost: 7500,
      distance: 1500,
    },
    {
      flightName: "Air Asia",
      location:{
        from: "Bangalore",
        to: "Hyderabad",
      },
      cost: 3500,
      distance: 650,
    },
    {
      flightName: "Vistara",
      location:{
        from: "Bangalore",
        to: "Hyderabad",
      },
      cost: 3500,
      distance: 650,
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

}
