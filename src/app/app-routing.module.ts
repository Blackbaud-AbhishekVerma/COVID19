import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { PrecautionComponent } from './precaution/precaution.component';
import { StateComponent } from './dashboard/state/state.component';
import { UserComponent } from './news/user/user.component';
import { AddNewsComponent } from './news/add-news/add-news.component';
import { AuthGaurdService } from './core/services/auth-gaurd.service';

const appRoutes: Routes =[
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'news', component: NewsComponent},
  {path: 'precautions', component: PrecautionComponent},
  {path: 'state/:name', component: StateComponent},
  {path: 'login', component: UserComponent},
  {path: 'addnews', canActivate: [AuthGaurdService], component: AddNewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
