import { AuthGuardService } from './services/auth-guard.service';
import { UserAPI } from 'fw/users/user.api';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SpaModule } from "../fw/fw.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routing";
import { CountryDetailComponent } from './country/country-detail/country-detail.component';
import { CountryListComponent } from './country/country-list/country-list.component';
import { CountryMaintComponent } from './country/country-maint/country-maint.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import {AppDataService} from "./services/app-data.service";
import {CountryDefinitionService} from "./services/country-definition.service";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SettingsComponent,
    CountryDetailComponent,
    CountryListComponent,
    CountryMaintComponent,
    AuthenticatedUserComponent
  ],
  imports: [
    BrowserModule,
    SpaModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    UserService,
    { provide: UserAPI, useExisting: UserService },
    AuthGuardService,
    AppDataService,
    CountryDefinitionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
