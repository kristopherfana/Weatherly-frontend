import { BackgroundService } from './../../shared/shared/services/background/background.service';
import { Component, OnInit } from '@angular/core';
import { BackgroundImg } from './modules/current-weather/models/current-weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  backgroundImg?: BackgroundImg;
  backgroundImgUrl?: String;
  blurhashDecodedUrl?: String;

  constructor(private backgroundService: BackgroundService) { }


  ngOnInit(): void {
    this.backgroundService.getbackgroundImage().subscribe(
      (backgroundImg: BackgroundImg) => {
        this.backgroundImg = backgroundImg;
        if (this.backgroundImg && this.backgroundImg.urls && this.backgroundImg.urls.raw) {
          this.backgroundImgUrl = this.backgroundImg.urls.raw + "&auto=compress&fit=clamp&w=2070&q=80";
        }
      }
    )
  }

}
