import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ShellComponent} from "./shell/shell.component";
import {LandingComponent} from "./landing/landing.component";
import {EmployeeInfoComponent} from "./shell/employee-info/employee-info.component";
import {LaptopInfoComponent} from "./shell/laptop-info/laptop-info.component";
import {SuccessAlertComponent} from "./success-alert/success-alert.component";
import {LaptopListComponent} from "./laptop-list/laptop-list.component";
import {LaptopDetailsComponent} from "./laptop-list/laptop-details/laptop-details.component";

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'add',
    component: ShellComponent,
    children: [
      {
        path: 'employee',
        component: EmployeeInfoComponent,
      },
      {
        path: 'laptop',
        component: LaptopInfoComponent
      },
    ]
  },
  {
    path: 'list',
    component: LaptopListComponent,
  },
  {
    path: 'list/details',
    component: LaptopDetailsComponent
  },
  {
    path: 'success',
    component: SuccessAlertComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
