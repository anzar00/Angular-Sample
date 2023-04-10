import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFlightComponent } from './view-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from 'src/services/flight.service';

describe('ViewFlightComponent', () => {
  let component: ViewFlightComponent;
  let fixture: ComponentFixture<ViewFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ActivatedRoute,
        Title,
        FlightService,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserDynamicTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [ ViewFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
