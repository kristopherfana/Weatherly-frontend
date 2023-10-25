import { BackgroundService } from './../../../../shared/shared/services/background/background.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from 'src/app/shared/shared/models/location/location.model';
import { LocationService } from 'src/app/shared/shared/services/location/location.service';
import { CurrentWeatherService } from './services/current-weather.service';
import { Observable, Subscription } from 'rxjs';
import { CurrentWeatherData } from './models/current-weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit, OnDestroy {

  selectedLocation: Location = {} as Location;
  selectedLocationObservable$: Observable<Location>;
  currentWeatherSubscriptions: Subscription[] = [];
  currentWeatherData: CurrentWeatherData = {} as CurrentWeatherData;

  constructor(private locationService: LocationService, private currentWeatherService: CurrentWeatherService, private backgroundService: BackgroundService) {
    this.selectedLocationObservable$ = this.locationService.getSelectedLocation();
  }

  ngOnInit() {
    this.currentWeatherSubscriptions.push(
      this.selectedLocationObservable$.subscribe(
        (selectedLocation: Location) => {
          this.currentWeatherSubscriptions.push(
            this.currentWeatherService.getCurrentWeather(selectedLocation.lat, selectedLocation.lon).subscribe(data => {
              this.currentWeatherData = data.currentWeatherData;
              this.backgroundService.setBackgroundImage(data.backgroundImg);
            })
          )
        }
      )
    )
  }

  ngOnDestroy() {
    this.currentWeatherSubscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }

}
