import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';


const routes: Routes = [
  {path: '',redirectTo:"content",pathMatch:'full'},
  {path: 'content',component:ContentComponent},
  {path: 'userDetails',component:UserDetailsComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'menuAdd',component:MenuAddComponent},
  {path: 'portfolioList',component:PortfolioListComponent},
  {path: '**',component:PageNotFoundComponent}
];

export const routingComponent = [UserDetailsComponent, ContentComponent, SignupComponent,
  PageNotFoundComponent, NavbarComponent, MenuAddComponent, PortfolioListComponent]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

