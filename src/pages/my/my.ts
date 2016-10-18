/**
 * Created by Administrator on 2016/10/18.
 */
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my',
  templateUrl: 'my.html',
})
export class myPage {
  private sort:string;
  private TotalMessage:string;
  private total:string;
  constructor(public navCtrl: NavController) {
    this.TotalMessage = "共有 3 条消息"
    this.total = "1888.00 元"
  }

}
