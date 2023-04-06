import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  submittedData: any;

  flightDetails: Flight = {
    flightName: '',
    location: {
      from: '',
      to: ''
    },
    cost: 0,
    distance: 0,
    availability: true
  }

  constructor(private router: Router, private flightService : FlightService, private titleService: Title ) { 
    this.titleService.setTitle("Add Flight");
  }

  ngOnInit(): void {
  }

  flightForm = new FormGroup({
    flightName: new FormControl(''),
    from: new FormControl(''),
    to: new FormControl(''),
    cost: new FormControl(0),
    distance: new FormControl(0),
    availability : new FormControl(true)
  });

  onSubmit(){
    console.log("Flight Form", this.flightForm.value);

    this.flightDetails.flightName = this.flightForm.controls['flightName'].value;
    this.flightDetails.location.from = this.flightForm.controls['from'].value;
    this.flightDetails.location.to = this.flightForm.controls['to'].value;
    this.flightDetails.cost = this.flightForm.controls['cost'].value;
    this.flightDetails.distance = this.flightForm.controls['distance'].value;
    this.flightDetails.availability = this.flightForm.controls['availability'].value;

    this.addFlight();
  }

  addFlight(){
    this.flightService.addFlight(this.flightDetails).subscribe(
      (data: any) => {
        console.log("Printing Data: ", data);
        this.submittedData = data;
      }
    )
      this.router.navigate(['/dashboard']);
  }

}
