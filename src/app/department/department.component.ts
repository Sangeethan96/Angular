import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ShowDepComponent } from './show-dep/show-dep.component';
import { AddEditDepComponent } from './add-edit-dep/add-edit-dep.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department',
  //standalone: true,
  //imports: [RouterOutlet,CommonModule,RouterLink,ShowDepComponent,AddEditDepComponent,FormsModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  constructor() { }

  ngOnInit(): void {
  }


}
