import { Component ,OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import {RootObject, List} from '../home/datatype';
import { done_deal } from '../done_deal/done_deal';
import {CallNumber} from 'ionic-native';
import {http_basic_lib} from "../http_basic_lib";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  joblist:List[]=[];
  http_result:RootObject;
  statue_0:any={
    'background-color': '#97ce68',
    'color': 'white'
  };
  statue_1:any={
    'background-color': '#f01414',
    'color': 'white'
  };
  constructor(public navCtrl: NavController ,private get_data:http_basic_lib) {
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
                  },
      error => {
          console.log(error);
      }
                );
  }
   ngOnInit(): void {
     this.get_http_data();
  }
  temp(){
  }
  callNumber( number:string ){
    //拨号组件电脑调试不能，错误正常
    CallNumber.callNumber(number, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }
  post_data(api:string,parmas:string){
    console.log(parmas);
    this.get_data.http_service_post(api,parmas)
      .subscribe(
        res => alert ( res.message)
      )
  }
  cancel(e:any){
    this.post_data('cancelClick','driver_id=1&id='+e)
  }
  change_status(e:any){
    this.post_data('receiveClick','driver_id=1&id='+e);
  }
}
