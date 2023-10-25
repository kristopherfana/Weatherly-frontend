import { NgModule } from '@angular/core';
import { HourlyForecastComponent } from './hourly-forecast.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HourlyForecastComponent
  ],
  imports: [CommonModule],
  exports: [HourlyForecastComponent]
})
export class HourlyForecastModule { }
