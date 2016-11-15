import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { leave } from '../leave/leave';
import { shuoshuo } from '../shuoshuo/shuoshuo';
import {add_baoche} from "../add_baoche/add_baoche";
import {Http} from "@angular/http";
@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class OtherPage implements OnInit{
  public TotalMessage:string;
  list:detail[]=[];
  constructor(public navCtrl: NavController,public http:Http) {
    this.TotalMessage = "共有 6 条消息";
  }


  ngOnInit(): void {
    this.get_http_data( this.list );
  }

  public get_http_data( t:detail[]) {
    this.http.get('http://www.shengyoudengwang.com/Service/Car/addressPrice.html')
      .subscribe( res =>
      {
        let obj = res.json();
        //判断数据获取
        if ( obj.code == '200'){
          t.splice(0);
          console.log('获取到包车价格列表');
          console.log(obj.result.List);
          for ( let i = 0; i < obj.result.List.length;i++){
            t.push( new detail(obj.result.List[i].startAddress,obj.result.List[i].endAddress,obj.result.List[i].dayPrice
            ,obj.result.List[i].price));
          }
        }else{
          console.log( '数据请求错误');
        }
      })
  }
  doRefresh( e:any){
    console.log(e);
    setTimeout(() => {
      console.log('Async operation has ended');
      this.get_http_data( this.list );
      e.complete();
    }, 1000);

  }

  gotoleave(){
    this.navCtrl.push( leave );
  }
  gotoshuoshuo(){
    this.navCtrl.push(shuoshuo);
  }
  gotodetail(){

  }
  addNew(){
    this.navCtrl.push(add_baoche);
  }

}
export class detail{
  startAddress:string;
  endAddress:string;
  dayPrice:string;
  price:string;

  constructor(startAddress: string, endAddress: string, dayPrice: string, price: string) {
    this.startAddress = startAddress;
    this.endAddress = endAddress;
    this.dayPrice = dayPrice;
    this.price = price;
  }
}
