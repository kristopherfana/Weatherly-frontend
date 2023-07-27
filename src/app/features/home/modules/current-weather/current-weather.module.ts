import { NgModule } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [CommonModule],
  exports: [CurrentWeatherComponent]
})
export class CurrentWeatherModule { }
