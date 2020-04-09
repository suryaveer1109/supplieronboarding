import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../http.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../user';
import { AppUrlComponent } from '../app-url/app-url.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  displayedColumns: string[] = ['name','userId','password'];
  public dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  public err;
  public userDetails=[];
  constructor(private _userService:HttpService) { }

  ngOnInit(): void {
    this._userService.getRequest(AppUrlComponent.USER_DETAILS)
    .subscribe(data=>this.userDetails=data,
      error=>this.err=error?.message);
    this.dataSource = new MatTableDataSource<User>(this.userDetails);
    this.dataSource.paginator = this.paginator;
  }

}
