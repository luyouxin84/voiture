import { Component ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {write_note} from "../write_note/write_note";
import {Http, Headers} from "@angular/http";
import {day, Result} from "./job";

@Component({
  selector: 'page-about',
  templateUrl: 'note.html'
})
export class NotePage implements OnInit{

  public list:day[]=[];
  constructor(public navCtrl: NavController,public http:Http) {

  }

  ngOnInit(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = 'driver_id=1';
   this.http.post('http://www.shengyoudengwang.com/Service/Car/memoList.html',params,{headers:headers})
     .subscribe( res =>
     {
       let i = res.json();
       console.log(i);
       console.log(i.result);
       for ( let j in i.result){
         console.log(j);
         let tt:Result[]=[];
         console.log(i.result[j]);

         for ( let k = 0; k<i.result[j].length;k++){
           let detail:Result={
              time:i.result[j][k].time,
             context:i.result[j][k].context
           };
           tt.push(detail);
         }
         console.log(j);
         console.log(tt);
         let t = new day(j,tt);
         this.list.push(t);
       }
       console.log(this.list);
     })
  }
  write_note(){
    this.navCtrl.push(write_note);
  }
}


