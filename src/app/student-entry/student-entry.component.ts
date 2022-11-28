import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {
  StudentName=""
  RollNumber=""
  AdmissionNumber=""
  MobileNumber=""
  CollegeName=""
  ParentName=""
  ParentphoneNumber=""
  Username=""
  Password=""
  readValue=()=>{
    let data={"Password":this.Password,"StudentName":this.StudentName,"RollNumber":this.RollNumber,"AdmissionNumber":this.AdmissionNumber
  ,"MobileNumber":this.MobileNumber,"CollegeName":this.CollegeName,"ParentName":this.ParentphoneNumber,"ParentphoneNumber":this.ParentphoneNumber
  ,"Username":this.Username}
  console.log(data)
  }

}
