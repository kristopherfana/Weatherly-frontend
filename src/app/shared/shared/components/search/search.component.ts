import { AutocompleteService } from './../../services/autocomplete/autocomplete.service';
import { EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Location, Locations } from '../../models/location/location.model';
import { LocationService } from '../../services/location/location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  searchControl = new FormControl();
  searchComponentSubscriptions: Subscription[] = [];
  results: Locations = [];
  @Output() selected = new EventEmitter<any>();

  constructor(private AutocompleteService: AutocompleteService, private locationService: LocationService) {
    this.searchComponentSubscriptions.push(
      this.searchControl.valueChanges.subscribe(query => {
        if (query.trim().length > 0) {
          this.searchComponentSubscriptions.push(
            this.AutocompleteService.search(query).subscribe(results => {
              this.results = results;
            })
          )
        } else {
          this.results = [];
        }
      })
    );
  }

  ngOnInit() {
  }
  select(result: Location) {
    this.selected.emit(result);
    this.results = [];
    this.locationService.setSelectedLocation(result);
  }

  ngOnDestroy() {
    this.searchComponentSubscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
