/**
 * Created by Administrator on 2016/10/18.
 */
import { Component } from '@angular/core';
import {bill} from '../my/bill';


@Component({
  selector:'show-message',
  templateUrl:'message.html'
})
export class message{
  private list:bill[] = [];
  private initListData():void {
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
  }
  constructor() {
    this.initListData();
  }

}
