import { Injectable } from '@angular/core';
import { DailyForecast } from '../models/daily-forecast.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyForecastService {

  constructor(private http: HttpClient) { }

  getDailyForecast(lat: number, lon: number): Observable<DailyForecast> {

    const url = `http://localhost:8080/daily-forecast?lat=${lat}&lon=${lon}`;

    return this.http.get(url).pipe(
      map((response: any) => response as DailyForecast)
    )
  }
}