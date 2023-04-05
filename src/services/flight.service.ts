import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flightServiceUrl: string = ""; 

  constructor(private httpClient: HttpClient ) {
    // this.flightServiceUrl =  "http://localhost:3000/"
    this.flightServiceUrl = environment.flightService;
   }

  getFlights(){
    return this.httpClient.get<any>(`${this.flightServiceUrl}`+"flights").pipe(
      map(
        (data: any) => {
          console.log("Printing Data: ", data);
          return data;
        }
      ), catchError(
        (error: any) => {
          console.log("Printing Error: ", error);
          return error;
        }
      )
    );
  }

  getFlight(id: number){
    return this.httpClient.get<any>(`${this.flightServiceUrl}`+"flights/"+`${id}`).pipe(
      map(
        (data: any) => {
          console.log("Printing Data: ", data);
          return data;
        }
      ), catchError(
        (error: any) => {
          console.log("Printing Error: ", error);
          return error;
        }
      )
    );
  }

  addFlight(flight: any){
    return this.httpClient.post<any>(`${this.flightServiceUrl}`+"flights", flight).pipe(
      map(
        (data: any) => {
          console.log("Printing Data: ", data);
          return data;
        }
      ), catchError(
        (error: any) => {
          console.log("Printing Error: ", error);
          return error;
        }
      )
    );
  }
}
