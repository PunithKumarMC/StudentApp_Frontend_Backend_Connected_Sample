import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionserviceService } from '../connectionservice.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  

  ngOnInit(): void {
  }
  registerForm: FormGroup 
  constructor(private formbuilder:FormBuilder,private router:Router,private connectionserivce:ConnectionserviceService) { 
    console.log("within constructor")
    this.registerForm=this.formbuilder.group({
      studentid:new FormControl(''),
      studentname:new FormControl(''),
      studentemail:new FormControl(''),
      password:new FormControl(''),
      confirmpassword:new FormControl('')
    })
  }
  
  onSubmit(){
    console.log(this.registerForm);
    let arr=this.registerForm.value;
    if(arr.password==arr.confirmpassword)
    {
     let {mypass,...others}=arr
     arr=others;
    // this.router.navigateByUrl('');
    // this.save();
    const add=this.connectionserivce.insertDats(arr);
      add.subscribe((para:any)=>{console.log("Success",para)})
      this.router.navigateByUrl("/login")
  }
    // else{
    //   console.log("not saved");
    // }
  }
  // save(){
    
  //   let arr=this.registerForm.value;
  //   console.log("not saved in save method"+arr);
  //   this.connectionserivce.insertDats(arr)
  // }
}
