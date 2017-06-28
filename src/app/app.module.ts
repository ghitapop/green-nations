import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaModule } from "../fw/fw.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CountriesComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    SpaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
