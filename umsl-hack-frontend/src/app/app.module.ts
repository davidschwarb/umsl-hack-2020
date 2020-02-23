import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { NavComponent } from './nav/nav.component';
import { QuestionsComponent } from './questions/questions.component';
import { LotDisplayComponent } from './display/lot-display/lot-display.component';
import { MapComponent } from './display/map/map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule} from '@angular/router';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
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
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: '',
    redirectTo: '/home',
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
    QuestionsComponent,
    LotDisplayComponent,
    MapComponent,
    DashboardComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
