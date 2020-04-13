import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AppUrlComponent } from './app-url/app-url.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSource = new BehaviorSubject('NOT_AVAILABLE');
  private appUrl = new BehaviorSubject(AppUrlComponent.SERVICE_URL);
  currentData = this.dataSource.asObservable();
  currentAppUrl = this.appUrl.asObservable();

  constructor() { }

  changeData(data: string) {
    this.dataSource.next(data);
  }

  changeAppUrl(urlCode: string) {
    if (urlCode) {
      this.appUrl.next('https://' + urlCode + '.ngrok.io');
    } else {
      this.appUrl.next(AppUrlComponent.SERVICE_URL);
    }
  }

}
