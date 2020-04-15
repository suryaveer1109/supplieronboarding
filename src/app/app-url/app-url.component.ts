import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-url',
  template: `
    <p>
      app-url works!
    </p>
  `,
  styles: [
  ],
})

export class AppUrlComponent implements OnInit {

  public static readonly durationInSeconds = 3;
  
  public static readonly SERVICE_URL= 'http://localhost:8080';
  
  public static readonly USER_DETAILS = '/assets/data/users.json';

  public static readonly PORTFOLIO_APP_MENUS = '/getMenuList';
  
  public static readonly PORTFOLIO_APP_DETAILS = '/getPortfolioProjectDetails';
  
  constructor() { }

  ngOnInit(): void {
  }

}
