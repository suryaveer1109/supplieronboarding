import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styles: [`div{color:red;}`]
})
export class ContentComponent implements OnInit {

  //@Input('parentData') public apName;
  constructor() { }

  ngOnInit(): void {
  }

} 
