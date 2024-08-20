import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowStudentListComponent } from './show-student-list/show-student-list.component';
import { StudentmModule } from './studentm.module';
import { AddEditStudentComponent } from './add-edit-student/add-edit-student.component';
import { AuthGuard } from '../auth-guard.guard';

const routes: Routes = [
 
  {
    path:'show',
    component:ShowStudentListComponent
  },
  {
    path:'addedit',
    component:AddEditStudentComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentmRoutingModule { }
