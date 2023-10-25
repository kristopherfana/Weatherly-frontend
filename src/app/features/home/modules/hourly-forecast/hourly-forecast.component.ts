import { HourlyForecastService } from './services/hourly-forecast.service';
import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HourlyForecast, List } from './models/hourly-forecast.model';
import { Location } from 'src/app/shared/shared/models/location/location.model';
import { LocationService } from 'src/app/shared/shared/services/location/location.service';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.scss']
})
export class HourlyForecastComponent {
  selectedLocation: Location = {} as Location;
  selectedLocationObservable$: Observable<Location>;
  hourlyForecastSubscriptions: Subscription[] = [];
  HourlyForecast: HourlyForecast = {} as HourlyForecast;
  HourlyForecastList: List[] = {} as List[];

  constructor(private locationService: LocationService, private hourlyForecastService: HourlyForecastService) {
    this.selectedLocationObservable$ = this.locationService.getSelectedLocation();
  }

  ngOnInit() {
    this.hourlyForecastSubscriptions.push(
      this.selectedLocationObservable$.subscribe(
        (selectedLocation: Location) => {
          this.hourlyForecastSubscriptions.push(
            this.hourlyForecastService.getHourlyForecast(selectedLocation.lat, selectedLocation.lon).subscribe(data => {
              this.HourlyForecast = data;
              console.log("Hourly forecast is:", this.HourlyForecast)
              this.HourlyForecastList = data.list;
              console.log(this.HourlyForecastList)
            })
          )
        }
      )
    )
  }

  ngOnDestroy() {
    this.hourlyForecastSubscriptions.forEach((subscription: Subscription) => subscription.unsubscribe());
  }
}
