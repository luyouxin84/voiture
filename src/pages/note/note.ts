import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {write_note} from "../write_note/write_note";
import {day, Result} from "./job";
import {http_basic_lib} from "../http_basic_lib";

@Component({
  selector: 'page-about',
  templateUrl: 'note.html'
})
export class NotePage{

  public list:day[]=[];
  constructor(public navCtrl: NavController,public http:http_basic_lib) {

  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.list.splice(0);
    this.get_http_data();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  get_http_data(){
    let d_id = localStorage.getItem('driver_id');
    this.http.http_service_post('memoList','driver_id=' + d_id)
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
            // console.log(j);
            // console.log(tt);
            let t = new day(j,tt);
            this.list.push(t);
          }
        }
        console.log(this.list);
      })
  }

  //ws不能正确识别ionic生命周期，不过使用起来正常
  ionViewWillEnter(){
    console.log('进入页面后初始化.....');
    this.list.splice(0);
    this.get_http_data();
  }
  write_note(){
    this.navCtrl.push(write_note);
  }
}


