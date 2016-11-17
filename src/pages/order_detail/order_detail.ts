/**
 * Created by Administrator on 2016/11/9.
 */
import { Component ,OnInit} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import { RootObject  } from '../order_detail/data';
import {Http} from "@angular/http";

@Component({
  templateUrl:'order_detail.html',
  selector:'order_detail'
})
export class order_detail implements OnInit{
  id:string;
  list:any={} ;
  list_evaluate_star:string[]=[];
  constructor(public  navCTRL:NavController,public navParam:NavParams,public http:Http,public viewCtrl:ViewController){
    this.id = navParam.get("id");
  }

  ngOnInit(): void {
    //初始评分星星，默认五星
    this.list_evaluate_star[0] = 'star';
    this.list_evaluate_star[1] = 'star';
    this.list_evaluate_star[2] = 'star';
    this.list_evaluate_star[3] = 'star';
    this.list_evaluate_star[4] = 'star';
    this.http.get('http://www.shengyoudengwang.com/Service/Car/orderDetail.html')
      .subscribe( res =>{
        let resutl:RootObject = res.json();
        this.list.startingTime = resutl.result.OrderDetail[0].startingTime;
        this.list.startingPoint = resutl.result.OrderDetail[0].startingPoint;
        this.list.endPoint = resutl.result.OrderDetail[0].endPoint;
        this.list.price = resutl.result.OrderDetail[0].price;
        if (resutl.result.OrderDetail[0].status = '3' ){
          this.list.status = '支付完成';
        } else this.list.status = '未知';
        this.list.context = resutl.result.OrderDetail[0].context;
        this.list.account = resutl.result.OrderDetail[0].account;
        this.list.nickname = resutl.result.OrderDetail[0].nickname;
        let i = parseFloat(resutl.result.OrderDetail[0].ZcEvaluateLevel);
        if( i < 4.5 && i>4) {
          this.list_evaluate_star[4] = 'star-half';
        }
      })
  }
  dismiss(){
    this.viewCtrl.dismiss();
  }
}
