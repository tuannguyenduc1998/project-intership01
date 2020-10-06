import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
import { EmployeeChildComponent } from './form-employee/employee-child/employee-child.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [EmployeeComponent, FormEmployeeComponent, EmployeeChildComponent],
  imports: [
    CommonModule,
    BrowserModule,
    EmployeeRoutingModule
  ],
  exports: [FormEmployeeComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class EmployeeModule { }
