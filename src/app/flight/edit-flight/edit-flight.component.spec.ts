import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlightComponent } from './edit-flight.component';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';


describe('EditFlightComponent', () => {
  let component: EditFlightComponent;
  let fixture: ComponentFixture<EditFlightComponent>;

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
      declarations: [ EditFlightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
