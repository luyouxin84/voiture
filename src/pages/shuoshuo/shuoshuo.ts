/**
 * Created by Administrator on 2016/11/8.
 */
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import  { RootObject } from '../leave/data';
import { Screen } from  '../get_screen_info';
import { leave } from '../leave/leave';
import { OtherPage as other } from '../other/other';
import { write_shuoshuo} from '../write_shuoshuo/write_shuoshuo';
import {http_basic_lib} from "../http_basic_lib";
@Component({
  templateUrl:'shuoshuo.html',
  selector:'shuoshuo'
})
export class shuoshuo implements OnInit{
  public list:any = [];
  constructor(public  navCtrl:NavController,public http:http_basic_lib){

  }

  ngOnInit(): void {
    let temp:RootObject;
    this.http.http_service_post('ssList','driver_id=1')
      .subscribe( res => {
        temp = res;
        // 得到长度，网络延迟过高或许有bug
        let i = parseInt(temp.result.Total.count);
        for ( let j=0 ; j<i;j++){
          let target:any={};
          target.id = temp.result.LeaveList[j].id;
          target.driver_id = temp.result.LeaveList[j].driver_id;
          //转换时间
          let k = parseInt(temp.result.LeaveList[j].time)*1000;
          let t = new Screen().change_item(k);
          target.time = t;
          target.context = temp.result.LeaveList[j].context;
          this.list.push(target);
        }
        // console.log( this.list );
      })
  }
  writeleave(){
    this.navCtrl.push(write_shuoshuo)
  }
  back(){
    this.navCtrl.setRoot(other)
  }
  gotoleave(){
    this.navCtrl.push(leave);
  }
}
