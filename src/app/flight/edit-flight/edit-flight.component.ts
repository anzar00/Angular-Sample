import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { FlightService } from 'src/services/flight.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements OnInit {
  flightId: any;
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
  };

  flightForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private flightService: FlightService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Edit Flight');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('Flight ID', params);
      this.flightId = params['id'];
    });

    this.flightForm = this.formBuilder.group({
      flightName: [''],
      from: [''],
      to: [''],
      cost: [''],
      distance: [''],
      availability: [''],
    });

    this.getFlight();
  }

  getFlight() {
    try {
      this.flightService.getFlight(this.flightId).subscribe((data: any) => {
        this.flightDetails = data;
        console.log('Printing Data: ', data);
        this.updateFlightForm();
      });
    } catch (error) {
      console.log('Printing Error: ', error);
    }
  }

  updateFlightForm() {
    this.flightForm.setValue({
      flightName: this.flightDetails.flightName,
      from: this.flightDetails.location.from,
      to: this.flightDetails.location.to,
      cost: this.flightDetails.cost,
      distance: this.flightDetails.distance,
      availability: this.flightDetails.availability,
    });
  }

  onSubmit() {
    console.log('Flight Form', this.flightForm.value);

    this.flightDetails.flightName = this.flightForm.controls['flightName'].value;
    this.flightDetails.location.from = this.flightForm.controls['from'].value;
    this.flightDetails.location.to = this.flightForm.controls['to'].value;
    this.flightDetails.cost = this.flightForm.controls['cost'].value;
    this.flightDetails.distance = this.flightForm.controls['distance'].value;
    this.flightDetails.availability = this.flightForm.controls['availability'].value;

    this.editFlight();
  }

  editFlight() {
    this.flightService.editFlight(this.flightDetails).subscribe((data: any) => {
      console.log('Printing Data: ', data);
      this.submittedData = data;
    });
    this.router.navigate(['/dashboard']);
  }
}
