import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
  
})
export class TrangchuComponent implements OnInit {

  url = "./assets/db/guitar.json";

  listguitar: any;

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(this.url);
  }
  ngOnInit() {

    this.getAll().subscribe(data => {

      this.listguitar = data
    })
  }

}
