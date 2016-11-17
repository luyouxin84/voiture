import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { http_basic_lib } from "../http_basic_lib";

/**
 * Created by Administrator on 2016/11/17.
 */
@Component({
  templateUrl:'create_account.html',
  selector:'create_account'
})
export class create_account{
  valid:string = 'disabled';
  result:any = {};
  get_code_text:string = '获取手机验证短信';
  constructor(public navCtrl:NavController,public postdata:http_basic_lib){
    this.result = {};
  }
  get_code( num:string){
    let j = 'phone='+ num;
    this.postdata.http_service_post('http://www.shengyoudengwang.com/Service/Car/getSmsCode.html',j,this.result,this.out());
  }

  private out() {
    console.log(this.result);
  }
  check_valid( num:number,pass:string,pass1:string){
    console.log(num,pass,pass1)
    if ( pass == pass1){
      let i = num.toString().length;
      console.log(i);
      if ( i == 11 ){
        this.valid = '';
        console.log('you xiao');
      }
    }else{
      this.valid = 'disabled';
    }
  }
}
