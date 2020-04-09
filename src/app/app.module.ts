import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpService } from './http.service';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import  { HttpClientModule } from '@angular/common/http';
import { AppUrlComponent } from './app-url/app-url.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PortfolioListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule, HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
