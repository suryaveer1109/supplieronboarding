import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  editTemplate:boolean=false;
  project;
  constructor(private data:DataService, private router:Router) { }

  ngOnInit(): void {
    this.data.currentData.subscribe(project=>this.project=project);
    if(this.project=='NOT_AVAILABLE'){
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
