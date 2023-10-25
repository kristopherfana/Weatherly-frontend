import { BackgroundService } from './../../shared/shared/services/background/background.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { BackgroundImg } from './modules/current-weather/models/current-weather.model';
import { decode } from 'blurhash';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("canvas") canvas!: ElementRef;
  backgroundImg?: BackgroundImg;
  backgroundImgUrl?: String;
  blurhashDecodedUrl?: String;
  isLoaded: Boolean = false;

  constructor(private backgroundService: BackgroundService) { }

  ngOnInit(): void {
    this.backgroundService.getbackgroundImage().subscribe(
      (backgroundImg: BackgroundImg) => {
        this.backgroundImg = backgroundImg;
        if (this.backgroundImg && this.backgroundImg.urls && this.backgroundImg.urls.raw) {
          this.backgroundImgUrl = this.backgroundImg.urls.raw + "&auto=compress&fit=clamp&w=2070&q=80";
          this.isLoaded = true;
        }
      }
    )
  }
  onImageLoad() {
    console.log("Just loaded");
    this.isLoaded = true;
  }

}

