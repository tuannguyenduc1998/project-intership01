import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEmployeeComponent } from './form-employee/form-employee.component';
const routes: Routes = [
  { path: '',   redirectTo: '/form', pathMatch: 'full' },
  {path: 'form', component: FormEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
