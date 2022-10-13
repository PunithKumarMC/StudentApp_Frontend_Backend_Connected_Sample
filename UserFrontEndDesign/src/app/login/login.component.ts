import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionserviceService } from '../connectionservice.service';
import { StudAuthGuard } from '../stud-auth.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private connectionserivce:ConnectionserviceService,private guard:StudAuthGuard) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    studentname: new FormControl('', [Validators.required]),
    password: new FormControl('',[Validators.required])
  });
  arr: any[] = [];
  
  
  verifyingdata() {
    console.log("inside verifying data");
    this.connectionserivce.getData().subscribe(p=>{
    
    console.log(p.length+"ddd")
    for (var i = 0; i <= p.length; i++) {
      for (var key in p[i]) {
        if (this.loginForm.value.studentname && this.loginForm.value.password == p[i][key]) {
          this.guard.isvalid=true;
          this.router.navigateByUrl('')
        }
      }
    }
    })
  }
}
