import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import { http_basic_lib } from "../http_basic_lib";

/**
 * Created by Administrator on 2016/11/17.
 */
@Component({
  templateUrl:'create_account.html',
  selector:'create_account',
})
export class create_account{
  valid:string = 'disabled';
  //验证码
  code:string;
  public wrongPass:string;
  wrongNum:string;
  get_code_text:string = '获取手机验证短信';
  constructor(public navCtrl:NavController,public postdata:http_basic_lib){
  }
  get_code( num:string){
    let j = 'phone='+ num;
    this.postdata.http_service_post('getSmsCode',j)
      .subscribe(
        res =>{
          console.log(res);
          this.code = res.result;
          console.log('接收到的验证码：'+this.code);
        },
        error =>{
          console.log(error)
        },
        () => {
        }
      );
  }
  create(phone:number,pass:string,pass1:string,code:string){
    if ( pass === pass1){
      console.log('密码相同');
      if ( code == this.code){
        console.log('验证码正确');
        let d = 'account='+phone+'&password='+pass+'&code='+code;
        this.postdata.http_service_post('carRegister',d)
          .subscribe(
            res =>{
              console.log(res);
            }
          )
      }else{
        console.log('验证码错误');
        console.log(code);
        console.log(this.code);
      }
    }else{
      console.log('2次密码不同');
    }
  }

  check_valid( num:number,pass:string,pass1:string){
    console.log(num,pass,pass1);
    if ( pass == pass1){
      this.wrongPass = '';
      let i = num.toString().length;
      console.log(i);
      if ( i == 11 ){
        this.valid = '';
        console.log('you xiao');
        this.wrongNum = '';
      }else{
        this.valid ='disabled';
        this.wrongNum = '手机号码位数不对 ！！！！！';
      }
    }else{
      this.valid = 'disabled';
      this.wrongPass = '    2次密码录入错误!!!!!'
    }
  }
}
