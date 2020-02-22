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
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    NavComponent,
    LoginComponent,
    QuestionsComponent,
    LotDisplayComponent,
    MapComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
