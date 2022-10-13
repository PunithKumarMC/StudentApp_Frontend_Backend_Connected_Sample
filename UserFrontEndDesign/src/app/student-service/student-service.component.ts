import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnectionserviceService } from '../connectionservice.service';
import { Student } from '../Student';
@Component({
  selector: 'app-student-service',
  templateUrl: './student-service.component.html',
  styleUrls: ['./student-service.component.css']
})
export class StudentServiceComponent implements OnInit {

  constructor(private connectionserivce:ConnectionserviceService) { }

  ngOnInit(): void {
  }
  studentid:string=""
  studentname:string=""
  studentemail:string=""
  password:string=""
  confirmpassword:string=""

  studdata:any;

  fetchallstudednt(){
   this.connectionserivce.getData().subscribe(p=>{
      this.studdata=p;
   });
  }

}
