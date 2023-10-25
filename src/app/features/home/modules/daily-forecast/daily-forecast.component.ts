import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DailyForecast, List } from './models/daily-forecast.model';
import { LocationService } from 'src/app/shared/shared/services/location/location.service';
import { DailyForecastService } from './services/daily-forecast.service';
import { Location } from 'src/app/shared/shared/models/location/location.model';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.scss']
})
export class DailyForecastComponent {
  selectedLocation: Location = {} as Location;
  selectedLocationObservable$: Observable<Location>;
  dailyForecastSubscriptions: Subscription[] = [];
  DailyForecast: DailyForecast = {} as DailyForecast;
  DailyForecastList: List[] = {} as List[];

  constructor(private locationService: LocationService, private dailyForecastService: DailyForecastService) {
    this.selectedLocationObservable$ = this.locationService.getSelectedLocation();
  }

  ngOnInit() {
    this.dailyForecastSubscriptions.push(
      this.selectedLocationObservable$.subscribe(
        (selectedLocation: Location) => {
          this.dailyForecastSubscriptions.push(
            this.dailyForecastService.getDailyForecast(selectedLocation.lat, selectedLocation.lon).subscribe(data => {
              this.DailyForecast = data;
              console.log("Daily Forecast is: ", this.DailyForecast)
              this.DailyForecastList = data.list;
            })
          )
        }
      )
    )
  }

  ngOnDestroy() {
    this.dailyForecastSubscriptions.forEach(
      (subscription: Subscription) => subscription.unsubscribe()
    )
  }
}
