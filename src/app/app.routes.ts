import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'employee', component: EmployeeComponent },
//   { path: '', redirectTo: '/department', pathMatch: 'full' }, // Default route
//   { path: '**', redirectTo: '/department' } // Redirect to department if route not found
];
