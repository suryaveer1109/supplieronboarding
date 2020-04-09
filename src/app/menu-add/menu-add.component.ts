import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.css']
})
export class MenuAddComponent implements OnInit {
  selectedValue = '';
  show: string = '0';

  menu={type:'0',parentMenuId:'',name:'',route:'',desc:''};

  menus = [
    {id: 1, name: 'Home'},
    {id: 2, name: 'Service'},
    {id: 3, name: 'App Management'},
    {id: 4, name: 'About Us'},
    {id: 5, name: 'Logout'}
  ];
 

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(){

  }

}
