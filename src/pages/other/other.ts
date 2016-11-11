import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { leave } from '../leave/leave';
import { shuoshuo } from '../shuoshuo/shuoshuo';
@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class OtherPage {
  public TotalMessage:string;
  constructor(public navCtrl: NavController,) {
    this.TotalMessage = "共有 6 条消息";
  }


  gotoleave(){
    this.navCtrl.push( leave );
  }
  gotoshuoshuo(){
    this.navCtrl.push(shuoshuo);
  }
  gotodetail(){

  }

}
