import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  editTemplate:boolean=false;
  portfolio;
  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
    this.data.currentData.subscribe(portfolio=>this.portfolio=portfolio);
    if(this.portfolio=='NOT_AVAILABLE'){
      this.router.navigate(['/portfolioList']);
    }
  }

  edit(){
    this.editTemplate=true;
  };

  save(){
    this.editTemplate=false;
  };
  
}
