/**
 * Created by Administrator on 2016/11/8.
 */
import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import  { RootObject } from '../leave/data';
import { Screen } from  '../get_screen_info';
import { leave } from '../leave/leave';
import { OtherPage as other } from '../other/other';
import { write_shuoshuo} from '../write_shuoshuo/write_shuoshuo';
@Component({
  templateUrl:'shuoshuo.html',
  selector:'shuoshuo'
})
export class shuoshuo implements OnInit{
  public info:any={};
  public list:any = [];
  constructor(public  navCtrl:NavController,public http:Http){

  }

  ngOnInit(): void {
    let temp:RootObject;
    this.http.get('http://www.shengyoudengwang.com/Service/Car/ssList.html')
      .subscribe( res => {
        temp = res.json();
        // 得到长度，网络延迟过高或许有bug
        let i = parseInt(temp.result.Total.count);
        console.log('内容长度'+i);
        for ( let j=0 ; j<i;j++){
          this.info.id = temp.result.LeaveList[j].id;
          this.info.driver_id = temp.result.LeaveList[j].driver_id;
          //转换时间
          let k = parseInt(temp.result.LeaveList[j].time);
          let t = new Screen().change_item(k);
          this.info.time = t;
          this.info.context = temp.result.LeaveList[j].context;
          this.list.push(this.info);
        }
        console.log( this.list );
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
