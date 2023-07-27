import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../../models/location/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private selectedLocation = new BehaviorSubject<Location>({
    name: 'London',
    lat: 51.5073219,
    country: 'GB',
    state: 'England',
    lon: -0.1276474
  } as Location);

  setSelectedLocation(selectedLocation: Location) {
    this.selectedLocation.next(selectedLocation);
  }

  getSelectedLocation() {
    return this.selectedLocation.asObservable();
  }
}
