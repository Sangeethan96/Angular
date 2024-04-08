import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  @Input() dep: any = { DepartmentId: '', DepartmentName: '' };
  DepartmentName: string = ''; // Initialize DepartmentName property

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    // No need to initialize here, the values will be set through @Input binding
  }

  addDepartment() {
    this.service.addDepartment(this.dep).subscribe(res => {
      alert(res.toString());
    });
  }

  updateDepartment() {
    this.service.updateDepartment(this.dep).subscribe(res => {
      alert(res.toString());
    });
  }
}
