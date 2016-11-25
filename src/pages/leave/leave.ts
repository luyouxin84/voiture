/**
 * Created by Administrator on 2016/11/8.
 */
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { RootObject } from '../leave/data';
import { Screen } from  '../get_screen_info';
import { shuoshuo } from '../shuoshuo/shuoshuo';
import { OtherPage as other } from '../other/other';
import { write_leave } from '../write_leave/write_leave';
import {http_basic_lib} from "../http_basic_lib";
@Component({
  templateUrl:'leave.html',
  selector:'leave'
})
export class leave implements OnInit{
  public list:any[] = [];
  constructor(public  navCtrl:NavController,public http:http_basic_lib){
  }
  ngOnInit(): void {
    let temp:RootObject;
    this.http.http_service_post('leaveList','driver_id=1')
      .subscribe( res => {
        temp = res;
        // 得到长度
        let i = parseInt(temp.result.Total.count);
        for ( let j=0 ; j<i;j++){
          let target:any={};
          target.id = temp.result.LeaveList[j].id;
          target.driver_id = temp.result.LeaveList[j].driver_id;
          //转换时间
          let o = new Screen().change_item( parseInt( temp.result.LeaveList[j].leavetime));
          target.leavetime = o;
          let k = parseInt(temp.result.LeaveList[j].time)*1000;
          let t = new Screen().change_item(k);
          target.time = t;
          target.context = temp.result.LeaveList[j].context;
          target.Approver = temp.result.LeaveList[j].Approver;
          target.statue = temp.result.LeaveList[j].statue;
          this.list.push(target);
        }
        },
        ()=>{
          console.log( 'finish' );
        })
  }
  writeleave(){
    this.navCtrl.push( write_leave );
  }
  back(){
    this.navCtrl.setRoot(other)
  }
  gotoshuoshuo(){
    this.navCtrl.push(shuoshuo);
  }
}
