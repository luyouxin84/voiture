import { Component ,OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {RootObject, List} from '../home/datatype';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { done_deal } from '../done_deal/done_deal';
import {relation_account} from "../relation_account/relation_account";
import {CallNumber} from 'ionic-native';
import {http_basic_lib} from "../http_basic_lib";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  switchFunction:string;
  joblist:List[]=[];
  http_result:RootObject;
  http:Http;
  statue_0:any={
    'background-color': '#97ce68',
    'color': 'white'
  };
  statue_1:any={
    'background-color': '#f01414',
    'color': 'white'
  };
  constructor(public navCtrl: NavController , http:Http ,private get_data:http_basic_lib) {
    this.http = http;
  }
  load_done_order(){
    this.navCtrl.push( done_deal);
  }
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.get_http_data();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  //获取网络数据
  get_http_data(){
    this.get_data.http_service_post('receiveOrder','driver_id=1')
      .subscribe(
        res => {
                  this.http_result = res;
                  if ( this.http_result.code = '200'){
                    this.joblist = this.http_result.result.List;
                    console.log(this.joblist);
                    for ( let i =0 ;i<this.joblist.length;i++){
                      if (this.joblist[i].UserStatus === '0'){
                        this.joblist[i].UserStatus = '接单';
                      } else if(this.joblist[i].UserStatus ==='1'){
                        this.joblist[i].UserStatus = '开始';
                      } else{
                        this.joblist[i].UserStatus = '完成';
                      }
                    }
                  }else
                  {
                    alert('数据请求失败');
                  }
                  }
                );
  }
   ngOnInit(): void {
     this.get_http_data();
  }
  temp(){
    this.navCtrl.push(relation_account)
  }
  callNumber( number:string ){
    //拨号组件电脑调试不能，错误正常
    CallNumber.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  post_data(link:string,parmas:string){
    console.log(parmas);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    this.http.post(link,parmas,{headers:headers})
      .subscribe(
        res => alert ( res.json().message)
      )
  }
  cancel(e:any){
    this.post_data('http://www.shengyoudengwang.com/Service/Car/cancelClick.html','driver_id=1&id='+e)
  }
  change_status(e:any){
    this.post_data('http://www.shengyoudengwang.com/Service/Car/receiveClick.html','driver_id=1&id='+e);
  }
}
