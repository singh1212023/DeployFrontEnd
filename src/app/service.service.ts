import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  
  login(data:any)
  { 

   
    return this.http.post('http://localhost:5241/api/Authentication/AuthenticateUser',data);
  }

  SignUp(data:any)
  { 
    console.log(data);
    
    return this.http.post('http://localhost:5241/api/User/SaveUserDetails',data);
  }

  GetAllStudents()
  { 
    console.log();
    
    return this.http.get('http://localhost:5241/api/Student/GetAllStudentDetails');
  }

  PostStudent(data:any)
  {
    return this.http.post('http://localhost:5241/api/Student/AddEditStudentDetails',data);
  }

  UpdateStudent(data:any)
  {
    console.log(data);
    
    return this.http.put<any>('http://localhost:5241/api/Student/AddEditStudentDetails',data);
  }
}
