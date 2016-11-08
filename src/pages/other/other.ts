import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { BaseType } from  '../other/type';
import { leave } from '../leave/leave';
import { shuoshuo } from '../shuoshuo/shuoshuo';
@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class OtherPage {
  public TotalMessage:string;
  public baseList:BaseType[] ;
  constructor(public navCtrl: NavController,) {
    this.TotalMessage = "共有 6 条消息";
    this.baseList= [] ;
    this.initBaseData();
  }

   initBaseData() : void{
    this.baseList.push(new BaseType("2016年10月20日14:50:51","已阅","据微信公号“德国华商”10月18日援引德国社会民主党日报《人民之友报》报道，" +
      "中国将在2018年卡尔·马克思诞辰200周年之际，向马克思的家乡德国古城特里尔赠送一座高达6.3米的马克思雕像，" +
      "由于马克思故居附近没有足够合适的空间放置雕像，" +
      "所以雕像计划被安置在西蒙史蒂夫特广场内。并且在没有邀请任何市议员代表和新闻媒体的情况下，" +
      "当地建筑管理局已经在雕像安放地架起了一座6,5米的木制支架模型。然而，这样的消息却引发当地的热烈讨论，赞同和反对的声音此起彼伏。"));
     this.baseList.push(new BaseType("2016年10月20日14:50:51","已阅","据微信公号“德国华商”10月18日援引德国社会民主党日报《人民之友报》报道，" ));
     this.baseList.push(new BaseType("2016年10月20日14:50:51","已阅","据微信公号“德国华商”10月18日援引德国社会民主党日报《人民之友报》报道，" +
      "中国将在2018年卡尔·马克思诞辰200周年之际，向马克思的家乡德国古城特里尔赠送一座高达6.3米的马克思雕像，" +
      "当地建筑管理局已经在雕像安放地架起了一座6,5米的木制支架模型。然而，这样的消息却引发当地的热烈讨论，赞同和反对的声音此起彼伏。"));
  }
  gotoleave(){
    this.navCtrl.push( leave );
  }
  gotoshuoshuo(){
    this.navCtrl.push(shuoshuo);
  }

}
