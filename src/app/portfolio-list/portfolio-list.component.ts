import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppUrlComponent } from '../app-url/app-url.component';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})

export class PortfolioListComponent implements OnInit {

  public err;
  private appUrl;
  public portfolios = [];
  public search = { type: 'portfolio', text: '' };
  selectedIndex;

  // public portfolios = [{ title: "Supply chain domain", subtitle: "MP&L", content: "Material planning and logistics. Application comes under this portfolio like SCS Recon, OBOM, Gas2, RS6000, CIC, PODS, Battery. etc", manager:"ABC", costcenter:"JLR123" },
  // { title: "Supply chain domain", subtitle: "MSS", content: "Projects like Vista etc. ", manager:"ABC", costcenter:"JLR123" }
  // ];

  constructor(private _httpService: HttpService,
    private _snackBar: MatSnackBar,
    private data: DataService,
    private router: Router,
    private spinner: NgxSpinnerService) { };

  ngOnInit(): void {
    this.searchData('portfolio');
  }

  searchData(searchType) {
    this.spinner.show();
    this.search.type = searchType;
    console.log(this.search);
    this.data.currentAppUrl.subscribe(appUrl => this.appUrl = appUrl);
    // this._httpService.postRequest(AppUrlComponent.SERVICE_URL+AppUrlComponent.PORTFOLIO_APP_DETAILS,this.search)
    this._httpService.postRequest(this.appUrl + AppUrlComponent.PORTFOLIO_APP_DETAILS, this.search)
      .subscribe(
        data =>{
        this.portfolios = data?.data; this.search.text = "";
        setTimeout(() => {
          this.spinner.hide();
        }, 2000);
      },
        error => {
        this.err = error?.message; 
        this.spinner.hide();
          this.openSnackBar(this.err, "Close");
        });
  };

  tabChange($event) {
    if ($event.index == 0) {
      this.searchData('portfolio');
    } else {
      this.searchData('projects');
    }
  };

  openSnackBar(message, action) {
    let snackbarRef = this._snackBar.open(message, action, { duration: AppUrlComponent.durationInSeconds * 1000 });
  };

  openProtfolioDetail(portfolio) {
    this.data.changeData(portfolio);
    this.router.navigate(['/portfolioDetail']);
  }
}
