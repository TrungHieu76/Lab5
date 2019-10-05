import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienthuong',
  templateUrl: './tienthuong.component.html',
  styleUrls: ['./tienthuong.component.css']
})
export class TienthuongComponent implements OnInit {
  list = [
    { age: "Dưới 25", rate: 0.07 },
    { age: "Từ 25 - 40", rate: 0.1 },
    { age: "Trên 40", rate: 0.15 }
  ]
  thongtin = {
    hoten: "",
    luong: 0,
    gioitinh: "",
    rate: 0,
  }
  constructor() { }

  ngOnInit() {
  }
  Tinh(){
    let tienluong = this.thongtin.luong * this.thongtin.rate;
    if (this.thongtin.gioitinh === "Nu") {
      tienluong += 200000;
    }
    return tienluong;
  }
}
