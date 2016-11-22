import { Component ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {write_note} from "../write_note/write_note";
import {day, Result} from "./job";
import {http_basic_lib} from "../http_basic_lib";

@Component({
  selector: 'page-about',
  templateUrl: 'note.html'
})
export class NotePage implements OnInit{

  public list:day[]=[];
  constructor(public navCtrl: NavController,public http:http_basic_lib) {

  }

  ngOnInit(){
   this.http.http_service_post('memoList','driver_id=1')
     .subscribe( res =>
     {
       let i = res;
       console.log(i);
       console.log(i.result);
       for ( let j in i.result){
         if ( j != 'length'){
           console.log(j);
           let tt:Result[]=[];
           console.log(i.result[j]);
           for ( let k = 0; k<i.result[j].length;k++){
             let time_transform= new Date(parseInt( i.result[j][k].memo_date )*1000);
             console.log(time_transform);
             let detail:Result={
               time:time_transform.toString(),
               context:i.result[j][k].context,
               title:i.result[j][k].title
             };
             tt.push(detail);
           }
           console.log(j);
           console.log(tt);
           let t = new day(j,tt);
           this.list.push(t);
         }
       }
       console.log(this.list);
     })
  }
  write_note(){
    this.navCtrl.push(write_note);
  }
}


