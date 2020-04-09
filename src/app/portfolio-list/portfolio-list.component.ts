import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppUrlComponent } from '../app-url/app-url.component';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})

export class PortfolioListComponent implements OnInit {
  
  public err;
  private durationInSeconds = 10;
  public portfolios=[];
  public search={type:'portfolio',text:''};

  // public portfolios = [{ title: "Supply chain domain", subtitle: "MP&L", content: "Material planning and logistics. Application comes under this portfolio like SCS Recon, OBOM, Gas2, RS6000, CIC, PODS, Battery. etc", manager:"ABC", costcenter:"JLR123" },
  // { title: "Supply chain domain", subtitle: "MSS", content: "Projects like Vista etc. ", manager:"ABC", costcenter:"JLR123" }
  // ];
  
  constructor(private _httpService:HttpService,private _snackBar: MatSnackBar) { };

  ngOnInit(): void {
    this.searchData();
  }

  openSnackBar(message,action) {
    let snackbarRef = this._snackBar.open(message, action,{duration: this.durationInSeconds * 1000});
  }

  searchData(){
    this._httpService.postRequest(AppUrlComponent.SERVICE_URL+AppUrlComponent.PORTFOLIO_APP_DETAILS,this.search)
    .subscribe(data=>this.portfolios=data?.data,
      error=>{this.err=error?.message;
        this.openSnackBar(this.err,"Close");
      });
  }
}
