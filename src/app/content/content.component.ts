import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [``]
})
export class ContentComponent implements OnInit {

  //@Input('parentData') public apName;
  private durationInSeconds=5;
  public applCode:string;
  value = 'Clear me';
  
  constructor(private data:DataService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.data.currentAppUrl.subscribe(u=>this.applCode=u);
  }

  onSubmit(){
    this.data.changeAppUrl(this.applCode);
    this.openSnackBar(this.applCode,"Dismiss");
  }

  setDefaultUrl(){
    this.data.changeAppUrl("");
    this.openSnackBar("","Dismiss");
  };

  openSnackBar(message,action) {
    if(!message){
      message="Deafult url set";
    }
    let snackbarRef = this._snackBar.open(message, action,{duration: this.durationInSeconds * 1000});
  }
} 
