import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-show-student-list',
  templateUrl: './show-student-list.component.html',
  styleUrls: ['./show-student-list.component.css']
})
export class ShowStudentListComponent {
  constructor(private servicecall:ServiceService , private route:Router){}
  Users:any=[]
  dataSource :any;
  displayedColumns: string[] = ['studentId','studentName','studentEmail', 'dob', 'city','studentPhone','edit','delete'];	


  ngOnInit()
  {
    this.GetAll();
  }


  GetAll()
  {   
  
      this.servicecall.GetAllStudents().subscribe((res:any)=>
      {
        console.log(res.studentlist);
        
          this.dataSource= new MatTableDataSource<any>(res.studentlist)
          
      })
  }

  getDataById(id:any)
  {
    this.route.navigate(['./student/addedit']);
   
  }
  Add()
  {
    
    this.route.navigate(['./student/addedit']);
  }
  
  Delete(id:any)
  {

  }
}
