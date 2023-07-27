import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Locations } from '../../models/location/location.model';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  private apiUrl = 'https://api.openweathermap.org/geo/1.0';
  private apiKey = 'ca8c6ec76045f8382dcf193fd7b48718';

  constructor(private http: HttpClient) { }

  search(query: string): Observable<Locations> {
    const url = `${this.apiUrl}/direct?q=${query}&limit=5&appid=${this.apiKey}`;

    return this.http.get<Locations>(url).pipe(
      map((response: any) => response as Locations)
    );
  }
}
