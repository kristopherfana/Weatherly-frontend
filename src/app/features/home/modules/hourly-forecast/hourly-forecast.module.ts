import { NgModule } from '@angular/core';
import { HourlyForecastComponent } from './hourly-forecast.component';



@NgModule({
  declarations: [
    HourlyForecastComponent
  ],
  exports: [HourlyForecastComponent]
})
export class HourlyForecastModule { }
