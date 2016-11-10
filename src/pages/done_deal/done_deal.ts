/**
 * Created by Administrator on 2016/11/5.
 */

import { Component , OnInit} from  '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { RootObject } from '../done_deal/data';
import { order_detail} from '../order_detail/order_detail';

@Component({
  templateUrl:'done_deal.html',
  selector:'done_deal.html'
})
export class done_deal implements OnInit{
  public http:Http;
  list:any[]=[];
  data:RootObject;
  constructor( public navCtrl:NavController , http:Http) {
    this.http = http;
  }
  gotodetail(getid:string){
    this.navCtrl.push(order_detail,{
      id : getid
    })
  }
  ngOnInit(): void {

    this.http.get('http://www.shengyoudengwang.com/Service/Car/myOrder.html')
    // .map( res => res.json())
      .subscribe(
        res => {
          this.data = res.json();
          console.log(this.data.result.Total.count);
          this.list = this.data.result.Order;
          console.log(this.list);


            // switch (this.http_result[i].status){
            //   //0:等待接单，1:已经接单，2:开始  3:完成(等待付款)  4:已付款(等待评价)  5:（订单取消）
            //   case '0':
            //     status = '等待接单';
            //     break;
            //   case '1':
            //     status = '已经接单';
            //     break;
            //   case '2':
            //     status = '开始';
            //     break;
            //   case '3':
            //     status = '完成';
            //     break;
            //   case '4':
            //     status = '已付款';
            //     break;
            //   case '5':
            //     status = '订单取消';
            //     break;
            // }



        }
      );
  }

}
