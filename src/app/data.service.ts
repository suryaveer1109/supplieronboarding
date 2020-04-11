import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  private appUrl = new BehaviorSubject('http://localhost:8080');
  currentMessage = this.messageSource.asObservable();
  currentAppUrl = this.appUrl.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

  changeAppUrl(urlCode: string) {
    if (urlCode) {
      this.appUrl.next('https://' + urlCode + '.ngrok.io');
    } else {
      this.appUrl.next('http://localhost:8080');
    }
  }

}
