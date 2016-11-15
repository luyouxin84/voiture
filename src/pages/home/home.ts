import { Component ,OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import { type } from '../home/datatype';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { done_deal } from '../done_deal/done_deal';
import {relation_account} from "../relation_account/relation_account";
import {CallNumber} from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  switchFunction:string;
  joblist:type[]=[];
  http_result:any[]=[];
  http:Http;
  constructor(public navCtrl: NavController , http:Http) {
    this.http = http;
  }
  load_done_order(){
    this.navCtrl.push( done_deal);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.get_http_data();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  //获取网络数据
  get_http_data(){
    this.http.get('http://www.shengyoudengwang.com/Service/Car/myOrder.html')
    // .map( res => res.json())
      .subscribe(
        res => {
          this.http_result = res.json().result.Order;
          console.log(this.http_result);
          let status:string;
          for( let i =0 ; i<this.http_result.length;i++){
            switch (this.http_result[i].status){
              //0:等待接单，1:已经接单，2:开始  3:完成(等待付款)  4:已付款(等待评价)  5:（订单取消）
              case '0':
                status = '等待接单';
                break;
              case '1':
                status = '已经接单';
                break;
              case '2':
                status = '开始';
                break;
              case '3':
                status = '完成';
                break;
              case '4':
                status = '已付款';
                break;
              case '5':
                status = '订单取消';
                break;
            }
            this.joblist.push( new type(this.http_result[i].useDate,this.http_result[i].startingPoint,this.http_result[i].endPoint,
              'facelink',this.http_result[i].startingTime,'13941549183',this.http_result[i].price,
              status));
          }
        }
      );
  }
   ngOnInit(): void {
     this.get_http_data();
  }
  temp(){
    this.navCtrl.push(relation_account)
  }
  callNumber( number:string ){
    //拨号组件电脑调试不能，错误正常
    CallNumber.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
}
