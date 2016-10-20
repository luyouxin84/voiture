/**
 * Created by Administrator on 2016/10/18.
 */
import { Component ,Input ,OnInit } from '@angular/core';
import {bill} from '../my/bill';


@Component({
  selector:'show-message',
  templateUrl:'message.html'
})
export class message implements OnInit{
   list:bill[] = [];
  @Input() isshow:string;
  @Input() myBaseInput:string;
   elementHeight:number;
  @Input() heigh:number;
   initListData():void {
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
    this.list.push(new bill("2016年10月18日16:58:57",200.00,400.00));
  }
  constructor() {
    this.initListData();

  }
  ngOnInit(){
    this.elementHeight = this.heigh * 0.132;
    this.myBaseInput = this.elementHeight.toString()+"px";
    console.log(this.myBaseInput);
  }

}
