import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xeploai',
  templateUrl: './xeploai.component.html',
  styleUrls: ['./xeploai.component.css']
  
})

export class XeploaiComponent implements OnInit {

  student =
    {
      name: "",
      date: "",
      goitinh: "Nam",
      diem: 0,
      result: "rot"
    }

  constructor() { }

  ngOnInit() {
  }
  xeploai() {
    if (this.student.diem < 5)
      this.student.result = "rot";
    else
      this.student.result = "dau";
  }
}
