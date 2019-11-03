import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitiet',
  templateUrl: './chitiet.component.html',
  styleUrls: ['./chitiet.component.css']
})
export class ChitietComponent implements OnInit {
  url = "./assets/db/guitar.json";
  id;
  guitarTuongUngId;
  listguitar:any;
  feature;
  url1 = "./assets/db/cartview.json";
  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  getAll() {
   return this.http.get(this.url);
  }
  ngOnInit() {

    
    this.getAll().subscribe(data =>{
      this.listguitar=data;
      this.route.paramMap.subscribe(params=>{
        this.id=+params.get('id');
      });
      this.guitarTuongUngId=this.listguitar.find(x=>{
        return x.id==this.id;
      });
      this.feature = this.guitarTuongUngId.newfeature;

    })
  }

}
