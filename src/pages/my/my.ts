/**
 * Created by Administrator on 2016/10/18.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { screen_info } from  '../screen_info';
import  {Screen } from  '../get_screen_info';

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
    this.myBase = !this.myBase;
    console.log(this.myBase)
  }
}
