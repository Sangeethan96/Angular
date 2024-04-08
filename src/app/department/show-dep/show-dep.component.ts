import { Component,OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddEditDepComponent } from '../add-edit-dep/add-edit-dep.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Item {
  DepartmentId: number;
  DepartmentName: string;
}

@Component({
  selector: 'app-show-dep',
  //standalone: true,
  //imports: [RouterOutlet,CommonModule,RouterLink,AddEditDepComponent,FormsModule],
  templateUrl: './show-dep.component.html',
  styleUrl: './show-dep.component.css'
})
export class ShowDepComponent implements OnInit{
  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle:string = '';;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:string="";
  DepartmentNameFilter:string="";
  DepartmentListWithoutFilter:any=[];

  

  ngOnInit(): void {
    this.refreshDepList();
  }


  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item: Item){
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item: Item){
    if(confirm('Are you sure??')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }
  


  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      //this.DepartmentListWithoutFilter=data;
    });
  }


}
