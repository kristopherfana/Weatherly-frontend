import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { BackgroundImg } from '../../models/background/background.model';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  private backgroundImg = new BehaviorSubject<BackgroundImg>({} as BackgroundImg);

  setBackgroundImage(backgroundImg: BackgroundImg) {
    this.backgroundImg.next(backgroundImg);
  }

  getbackgroundImage() {
    return this.backgroundImg.asObservable();
  }
}
