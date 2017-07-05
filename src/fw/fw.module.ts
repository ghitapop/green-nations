import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrameworkBodyComponent} from "./framework-body/framework-body.component";
import {ContentComponent} from "./content/content.component";
import {TitleBarComponent} from "./title-bar/title-bar.component";
import {FrameworkConfigService} from "./services/framework-config.service";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {StatusBarComponent} from "./status-bar/status-bar.component";
import {ScreenService} from "./services/screen.service";
import {ScreenLargeDirective} from "./directives/screen-large.directive";
import {ScreenBelowLargeDirective} from "./directives/screen-below-large.directive";
import {MenuService} from "./services/menu.service";
import {MenuComponent} from "./menus/menu/menu.component";
import {MenuItemComponent} from "./menus/menu-item/menu-item.component";
import {RouterModule} from "@angular/router";
import {PopupMenuComponent} from "./popup-menu/popup-menu.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SignInComponent} from "./users/sign-in/sign-in.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterUserComponent} from "./users/register-user/register-user.component";
import {DynamicFormComponent} from "./dynamic-forms/dynamic-form/dynamic-form.component";
import {DynamicFieldComponent} from "./dynamic-forms/dynamic-field/dynamic-field.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FrameworkBodyComponent,
    ContentComponent,
    TitleBarComponent,
    TopBarComponent,
    StatusBarComponent,
    ScreenLargeDirective,
    ScreenBelowLargeDirective,
    MenuComponent,
    MenuItemComponent,
    PopupMenuComponent,
    SignInComponent,
    RegisterUserComponent,
    DynamicFormComponent,
    DynamicFieldComponent
  ],
  exports: [
    FrameworkBodyComponent,
    DynamicFormComponent
  ],
  providers: [
    FrameworkConfigService,
    ScreenService,
    MenuService
  ]
})
export class SpaModule { }
