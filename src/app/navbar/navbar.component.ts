import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from '../data.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppUrlComponent } from '../app-url/app-url.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('parentData') public apName: any;
  objectKeys = Object.entries;
  today: number = Date.now();
  menuError:boolean= false;
  private err;
  private appUrl;

  public menuInfo 
  // = [
  //   {
  //     name: "Home", link: "",
  //     subMenu: [{ name: "Portfolios", link: "portfolioList" }]
  //   },
  //   {
  //     name: "Service", link: "",
  //     subMenu: [{ name: "User Details", link: "userDetails" }]
  //   },
  //   {
  //     name: "App Management", link: "",
  //     subMenu: [{ name: "Add New Menu", link: "menuAdd" }]
  //   },
  //   { name: "Add App code", link: "content", subMenu: null },
  //   { name: "About Us", link: "test", subMenu: null },
  //   { name: "Sign Up", link: "signup", subMenu: null },
  //   { name: "Logout", link: "test", subMenu: null }
  // ];

  constructor(private _httpService: HttpService,
    private _snackBar: MatSnackBar,
    private data: DataService,
    private spinner: NgxSpinnerService, private router:Router) { }

  ngOnInit(): void {
    this.getMenus();
  }

  checkSubmenu(subMenu: any): boolean {
    if (subMenu) {

      if (subMenu[0].name == undefined || subMenu[0].name == null) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

  getMenus() {
    this.spinner.show();

    this.data.currentAppUrl.subscribe(appUrl => this.appUrl = appUrl);
    this._httpService.getRequest(this.appUrl + AppUrlComponent.PORTFOLIO_APP_MENUS)
      .subscribe(
        data => {
          this.menuInfo = data?.data;
          console.log(JSON.stringify(this.menuInfo));
          this.menuError=false;
          setTimeout(() => {
            this.spinner.hide();
          }, 2000);
        },
        error => {
          this.err = error?.message;
          this.spinner.hide();
          this.menuError=true;
          this.openSnackBar(this.err, "Close");
          this.router.navigate(['/content']);
        });
  };

  openSnackBar(message, action) {
    let snackbarRef = this._snackBar.open(message, action, { duration: AppUrlComponent.durationInSeconds * 1000 });
  };

}
