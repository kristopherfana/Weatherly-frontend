import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HourlyForecastModule } from './modules/hourly-forecast/hourly-forecast.module';
import { CurrentWeatherModule } from './modules/current-weather/current-weather.module';
import { DailyForecastModule } from './modules/daily-forecast/daily-forecast.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    HourlyForecastModule,
    CurrentWeatherModule,
    DailyForecastModule,
    SharedModule,
    CommonModule
  ]
})
export class HomeModule { }
