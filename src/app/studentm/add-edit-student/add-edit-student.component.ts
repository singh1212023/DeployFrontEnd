import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent {
  constructor( private ServiceCall: ServiceService, private route: Router,private formBuilder:FormBuilder) { }


  Form=new FormGroup({
     // employeeId: new FormControl(''),
     studentId:new FormControl(),
     studentName: new FormControl('',[Validators.required]),
     studentEmail: new FormControl('',[Validators.required]),
     dob: new FormControl('',[Validators.required]),
     city: new FormControl('',[Validators.required]),
     studentPhone: new FormControl(0,[Validators.required])
    
  });
//new

  SubmitForm(data:any)
  {
    console.log(data);
    
    
   var user= this.Form.value;
    if(this.Form.valid)
    {

      if(user.studentId)
      {
      this.ServiceCall.UpdateStudent(data).subscribe((res:any)=>
      {
        alert ("recorded Updated ");
      })
      }
      else
      {
        user.studentId=0;
        this.ServiceCall.PostStudent(data).subscribe((res:any)=>
        {
          alert ("recorded Posted ");
        })
      }
    }
  };

  //Dynamic Form Controls Below + 2nd Way to make Reactive Form ts Controls
  // DynamicForm!:FormGroup;
  
  // ngOnInit():void
  // {
  //       this.DynamicForm=this.formBuilder.group
  //       (
  //         {
  //           details: this.formBuilder.array([]),
  //           id:[0]
  //         }
  //       );
  //       this.AddRowItem(0);
  // }
  // RwowItem(inx:number)
  // {
  //   return this.formBuilder.group
  //   ({
  //     id:[inx],
  //     name:[''],
  //     email:[''],
  //     phone:['']
  //   });
  // }

  // GetDetails()
  // {
  //   return this.DynamicForm.get('details') as FormArray;
  // }

  // AddRowItem(inx:number)
  // {
  //   const Control=<FormArray>
  //   this.DynamicForm.controls['details'];
  //   Control.push(this.RwowItem(inx))
  // }

  // RemoveRowItem(inx:number)
  // {
  //   const Control=<FormArray>
  //   this.DynamicForm.controls['details'];
  //   Control.removeAt(inx);
  // }


}
