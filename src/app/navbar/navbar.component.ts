import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input('parentData') public apName: any;
  objectKeys = Object.entries;
  today: number = Date.now();
  
  public menuInfo = [
    {
      name: "Home", link: "",
      subMenu: [{name:"Portfolios",link:"portfolioList"}]
    },
    {
      name: "Service", link: "",
      subMenu: [{ name: "User Details", link: "userDetails" }]
    },
    {
      name: "App Management", link: "",
      subMenu: [{ name: "Add New Menu", link: "menuAdd" }]
    },
    { name: "Add App code", link: "content", subMenu: null },
    { name: "About Us", link: "test", subMenu: null },
    { name: "Sign Up", link: "signup", subMenu: null },
    { name: "Logout", link: "test", subMenu: null }
  ];

  checkSubmenu(subMenu: any): boolean {
    if (subMenu) {
      
      if (subMenu[0].name == undefined || subMenu[0].name==null) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  };

  constructor() { }
  
  ngOnInit(): void {
  }

  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  
}
