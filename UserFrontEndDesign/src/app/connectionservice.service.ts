import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionserviceService {

  constructor(private httpclient:HttpClient) { }

  public insertDats(student:Student): Observable<Student>{
    const contentType = {'content-Type':'application/json'}
    const jsonObj = JSON.stringify(student)
    console.log("within connection service")
    console.log(student)
    return this.httpclient.post<Student>("http://localhost:8089/api/s1/insertstudent",jsonObj, {'headers':contentType});
  }
  arr: any[] = [];
  getData():Observable<any>{
    return this.httpclient.get("http://localhost:8089/api/s1/getsllstudents")
  }
}
