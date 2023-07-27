import { NgModule } from '@angular/core';
import { DailyForecastComponent } from './daily-forecast.component';



@NgModule({
  declarations: [
    DailyForecastComponent
  ],
  exports: [DailyForecastComponent]
})
export class DailyForecastModule { }
