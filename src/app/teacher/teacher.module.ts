import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTeacherListComponent } from './show-teacher-list/show-teacher-list.component';
import { Routes } from '@angular/router';


const routes :Routes=[
  {
    path :'',
    component:ShowTeacherListComponent

  }
];
@NgModule({
  declarations: [
    ShowTeacherListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeacherModule { }
