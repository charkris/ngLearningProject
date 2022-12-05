import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {LandingComponent} from './landing/landing.component';
import {EmployeeInfoComponent} from './shell/employee-info/employee-info.component';
import {LaptopInfoComponent} from './shell/laptop-info/laptop-info.component';
import {ShellComponent} from './shell/shell.component';
import {SuccessAlertComponent} from './success-alert/success-alert.component';
import {LaptopListComponent} from './laptop-list/laptop-list.component';
import {LaptopDetailsComponent} from './laptop-list/laptop-details/laptop-details.component';
import {AppRoutingModule} from "./app-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    EmployeeInfoComponent,
    LaptopInfoComponent,
    ShellComponent,
    SuccessAlertComponent,
    LaptopListComponent,
    LaptopDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
