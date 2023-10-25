import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { HourlyForecast } from '../models/hourly-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class HourlyForecastService {

  constructor(private http: HttpClient) { }

  getHourlyForecast(lat: number, lon: number): Observable<HourlyForecast> {

    const url = `http://localhost:8080/hourly-forecast?lat=${lat}&lon=${lon}`;

    return this.http.get(url).pipe(
      map((response: any) => response as HourlyForecast)
    )
  }
}
