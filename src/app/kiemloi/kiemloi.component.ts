import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kiemloi',
  templateUrl: './kiemloi.component.html',
  styleUrls: ['./kiemloi.component.css']
})
export class KiemloiComponent implements OnInit {
    
  list = [
    { age: "Dưới 25", rate: 0.07 },
    { age: "Từ 25 - 40", rate: 0.1 },
    { age: "Trên 40", rate: 0.15 }
  ]
  thongtin = {
    hoten:null,
    luong: 0,
    gioitinh: "",
    rate: 0,
  }
  forgot;
  hdluong;
  ndluong=true;
  forgot1=true;
  constructor() { }

  ngOnInit() {
  }
  hidden(){
    if (this.thongtin.hoten == null ||this.thongtin.hoten === "") {
      this.forgot = false;
      this.forgot1 = true;
    }
    else{
      this.forgot = true;
      this.forgot1 = false;
    }
  }
  hiddenluong() {
    if (this.thongtin.luong >= 2000000) {
      this.hdluong = true;
      this.ndluong = false;
    }
    else {
      this.hdluong = false;
      this.ndluong = true;
      
    }
  }
  Tinh() {
    let tienluong = this.thongtin.luong * this.thongtin.rate;
    if (this.thongtin.gioitinh === "Nu") {
      tienluong += 200000;
    }
    return tienluong;
  }
  
}
