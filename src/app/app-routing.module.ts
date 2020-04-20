import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AppUrlComponent } from './app-url/app-url.component';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { LoginPageComponent } from './login-page/login-page.component';


const routes: Routes = [
  {path: '',redirectTo:"login",pathMatch:'full'},
  {path: 'login',component:LoginPageComponent},
  {path: 'content',component:ContentComponent},
  {path: 'userDetails',component:UserDetailsComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'portfolioList',component:PortfolioListComponent},
  {path: 'portfolioDetail',component:PortfolioDetailComponent},
  {path: 'projectDetail',component:ProjectDetailComponent},
  {path: '**',component:PageNotFoundComponent}
];

export const routingComponent = [UserDetailsComponent, ContentComponent, SignupComponent,
  PageNotFoundComponent, NavbarComponent, PortfolioListComponent, AppUrlComponent, PortfolioDetailComponent, ProjectDetailComponent,LoginPageComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

