import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banhang',
  templateUrl: './banhang.component.html',
  styleUrls: ['./banhang.component.css']
})
export class BanhangComponent implements OnInit {
  soluong = {
    slnuocngot: 0,
    slcaphe: 0,
    slthuocla: 0,
  }
  type = {
    nuocngot: null,
    caphe: null,
    thuocla: null,
  }
  constructor() { }

  ngOnInit() {
  }
  TTNuocNgot(){
    let thanhtien = this.soluong.slnuocngot*10000;
    return thanhtien;
  }
  TTCaPhe() {
    let thanhtien = this.soluong.slcaphe*12000;
    return thanhtien;
  }
  TTThuocLa() {
    let thanhtien = this.soluong.slthuocla * 18000;
    return thanhtien;
  }
  Tongtiennuocngot(){
    if (this.type.nuocngot == true)
      return this.TTNuocNgot() ;
      else
      return 0;
  }
  Tongtiencaphe() {
    if (this.type.caphe == true)
      return this.TTCaPhe();
    else
      return 0;
  }
  Tongtienthuocla() {
    if (this.type.thuocla == true)
      return this.TTThuocLa();
      else
      return 0;
  }
  Tongtien(){
    return this.Tongtiencaphe() + this.Tongtiennuocngot() + this.Tongtienthuocla();
  }

}
