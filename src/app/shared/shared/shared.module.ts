import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { SearchComponent } from './components/search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    SearchComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [HeaderComponent]
})
export class SharedModule { }