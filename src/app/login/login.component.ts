import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data: any;
  constructor(private fb: FormBuilder, private servicecall: ServiceService, private route: Router, private snackbar: MatSnackBar) { }
  LoginForm = new FormGroup({
    userEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    userPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
  });

//new changes to push and reflect those changes- in progress

//new changes to push and reflect those changes- completed successfully

//now change in main branch and update local branch -1
  SignUp=new FormGroup(
    {
      userName:new FormControl('',[Validators.required]),
      userPhone:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      userEmail: new FormControl('',[
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    }
  )
  //new changes
  Login(data: any) 
  {
    {
      if(this.LoginForm.valid)
      {
        this.servicecall.login(data).subscribe((res:any)=>{
          // localStorage.setItem('displayname',res.name)
          this.data=res.token;
          if(this.data!=null)
          {
            localStorage.setItem('token',this.data)
            this.route.navigate(['./student/show'])
            this.snackbar.open('Login Successful', 'Verfied', {
            duration:2000
            });
           
  
          }
          else{
            this.snackbar.open('Login Failed', 'Please Enter Valid Credentials', {
              duration: 10000
            });
           
            this.route.navigate([''])
          }
        }) 
      }
      else{
  
        alert("lOGIN FAILED");
        
      }
       
    }
  }

  AddUSer(data:any)
    {
      console.log(data);
    
      this.servicecall.SignUp(data).subscribe((res)=>
      {
        console.log(data);
        this.snackbar.open('User Saved Successfully', 'saved', {
          duration: 10000
        });
        
      })
      location.reload();
    }
  
}
