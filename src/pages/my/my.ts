/**
 * Created by Administrator on 2016/10/18.
 */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { screen_info } from  '../screen_info';
import  {Screen } from  '../get_screen_info';
import {person_info} from "../person_info/person_info";
import {car_info} from "../car_info/car_info";
import {demand_cash} from "../demand_cash/demand_cash";
import {cash_flow} from "../cash_flow/cash_flow";

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class myPage {
   sort:string;
   TotalMessage:string;
   total:string;
   win:screen_info;

  constructor(public navCtrl: NavController ,private screeninfo:Screen ) {
    this.TotalMessage = "没有记录";
    this.total = "1888.00 元";
    }
  change(){
    this.navCtrl.push(demand_cash);
  }
  load_person_info(){
    this.navCtrl.push( person_info );
  }
  load_car_info(){
    this.navCtrl.push( car_info );
  }
  logout(){
    localStorage.removeItem('uid');
    if ( !localStorage.getItem('uid')){
      console.log('out')
      location.reload()
    } else{
      console.log( 'out not run correct')
    }
  }
  recevie_data_long(e:any){
    // console.log('接收到数据条目'+e);
    this.TotalMessage = "共有 " + e + " 条消息";
  }
  goto_cash_flow(  e:any ){
    this.navCtrl.push(cash_flow,{
      month : e
    });
  }
  get_total( total:any ){
    this.total = total+'元';
  }
}
