import { NgModule } from '@angular/core';
import { DailyForecastComponent } from './daily-forecast.component';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/shared/shared/components/nav/nav.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    DailyForecastComponent,

  ],
  imports: [CommonModule, SharedModule],
  exports: [DailyForecastComponent]
})
export class DailyForecastModule { }
