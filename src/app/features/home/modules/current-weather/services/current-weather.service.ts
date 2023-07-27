import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CurrentWeatherModel } from '../models/current-weather.model';

@Injectable({
  providedIn: 'root'
})
export class CurrentWeatherService {

  constructor(private http: HttpClient) { }

  getCurrentWeather(lat: number, lon: number): Observable<CurrentWeatherModel> {

    const url = `http://localhost:8080/current-weather?lat=${lat}&lon=${lon}`;

    return this.http.get(url).pipe(
      map((response: any) => response as CurrentWeatherModel)
    )
  }
}
