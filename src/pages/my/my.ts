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

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class myPage {
   sort:string;
   TotalMessage:string;
   total:string;
   myBase:boolean;
   myBase2:string;
   win:screen_info;

  constructor(public navCtrl: NavController ,private screeninfo:Screen ) {
    this.TotalMessage = "共有 3 条消息"
    this.total = "1888.00 元"
    this.myBase = true;
    this.myBase2 ='123132131';
    this.win = new screen_info(screeninfo.getscreen().wid,this.screeninfo.getscreen().hei);
    console.log( this.win.hei);
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
}
