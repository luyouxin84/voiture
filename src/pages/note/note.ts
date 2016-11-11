import { Component ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {write_note} from "../write_note/write_note";
import {Http, Headers} from "@angular/http";

@Component({
  selector: 'page-about',
  templateUrl: 'note.html'
})
export class NotePage implements OnInit{
  public list:item[]=[];
  constructor(public navCtrl: NavController,public http:Http) {

  }

  ngOnInit(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = 'driver_id=1';
   this.http.post('http://www.shengyoudengwang.com/Service/Car/memoList.html',params,{headers:headers})
     .subscribe( res =>
     {
       let i = res.json().result;
       for ( let o of i){
         console.log(o)

       }
     })
  }
  write_note(){
    this.navCtrl.push(write_note);
  }
}

class item{
  title:string;
  date:string;
  context:string;
  constructor(title: string, date: string, context: string) {
    this.title = title;
    this.date = date;
    this.context = context;
  }
}
