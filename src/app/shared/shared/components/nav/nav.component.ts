import { Component } from '@angular/core';
import { LocationService } from '../../services/location/location.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private locationService: LocationService) { }
}
