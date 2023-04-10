import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FlightService } from 'src/services/flight.service';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let flightService: FlightService;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserDynamicTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [DashboardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    flightService = TestBed.inject(FlightService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should return Hello World", () => {
    expect(component.helloworld()).toEqual("Hello World");
  })

  it("Should return FlightId", () => {
    expect(component.trackbyFlightDetail(1, { id: 1 })).toBe(1);
  })

  it("Should call getFlights in Service", () => {
    spyOn(flightService, 'getFlights').and.callThrough();
    component.getFlights();
    expect(flightService.getFlights).toHaveBeenCalled();
  })

  it("Should return flightDetails", () => {
    const mockFlights = [
      {"id": 6,"flightName": "AirIndia"},
      {"id": 2,"flightName": "SpiceJet"}
    ];
    spyOn(flightService, 'getFlights').and.returnValue(of(mockFlights));

    component.getFlights();
    expect(component.flightDetails).toEqual(mockFlights);
  })
});

