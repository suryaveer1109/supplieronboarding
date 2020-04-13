import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppUrlComponent } from '../app-url/app-url.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [``]
})
export class ContentComponent implements OnInit {

  //@Input('parentData') public apName;
  public applCode:string;
  value = 'Clear me';
  
  constructor(private data:DataService,private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.data.currentAppUrl.subscribe(u=>this.applCode=u);
  }

  onSubmit(){
    this.data.changeAppUrl(this.applCode);
    this.openSnackBar(this.applCode,"Dismiss");
  }

  setDefaultUrl(){
    this.data.changeAppUrl("");
    this.openSnackBar("","Close");
  };

  openSnackBar(message,action) {
    if(!message){
      message="Deafult url set";
    }
    let snackbarRef = this._snackBar.open(message, action,{duration: AppUrlComponent.durationInSeconds * 1000});
  };

} 
