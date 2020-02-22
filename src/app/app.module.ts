import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { LotDisplayComponent } from './display/lot-display/lot-display.component';
import { MapComponent } from './display/map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'lot-finder',
    component: DisplayComponent,
    data: { title: 'Best Lots' }
  },
  {
    path: 'information',
    component: QuestionsComponent,
    data: { title: 'Questionnaire' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: '**',
    component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavComponent,
    LoginComponent,
    QuestionsComponent,
    LotDisplayComponent,
    MapComponent,
    DashboardComponent,
    NotFoundComponent
  ],
  imports: [
      RouterModule.forRoot(appRoutes, { enableTracing: true }),
      BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
