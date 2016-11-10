/**
 * Created by Administrator on 2016/11/9.
 */
import { Component } from '@angular/core';
import { NavController ,NavParams } from 'ionic-angular';
@Component({
  templateUrl:'order_detail.html',
  selector:'order_detail'
})
export class order_detail{
  id:string;
  constructor(public  navCTRL:NavController,public navParam:NavParams){
    this.id = navParam.get("id");
  }
}
