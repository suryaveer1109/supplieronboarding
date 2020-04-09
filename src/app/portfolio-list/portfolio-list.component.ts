import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.css']
})

export class PortfolioListComponent implements OnInit {
  public portfolios=[];
  public err;
  private _url:string = 'http://localhost:8080/getDetails';
  public search={type:'portfolio',text:''};

  // public portfolios = [{ title: "Supply chain domain", subtitle: "MP&L", content: "Material planning and logistics. Application comes under this portfolio like SCS Recon, OBOM, Gas2, RS6000, CIC, PODS, Battery. etc", manager:"ABC", costcenter:"JLR123" },
  // { title: "Supply chain domain", subtitle: "MSS", content: "Projects like Vista etc. ", manager:"ABC", costcenter:"JLR123" }
  // ];
  
  constructor(private _httpService:HttpService) { }

  ngOnInit(): void {
    // this._httpService.getRequest(this._url)
    // .subscribe(data=>this.portfolios=data?.data);
    this.searchData();
  }

  searchData(){
    this._httpService.postRequest(this._url,this.search)
    .subscribe(data=>this.portfolios=data?.data,
      error=>this.err=error?.message);
  }
}
