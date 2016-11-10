import { Component ,OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http , Headers} from '@angular/http';
import { data } from '../car_info/data';


@Component({
  templateUrl:"car_info.html",
  selector:"car_info"
})
export  class  car_info implements OnInit {
  http:Http;
  number:string;
  //mydata为获取的数据，info为操作的空对象
  myDate:data;
  info :any= {} ;
  constructor( public navCTRL:NavController , http:Http ) {
    this.http = http;
  }

  ngOnInit(): void {
    this.http.get('http://www.shengyoudengwang.com/Service/Car/addCar.html')
      .subscribe( res => {
        this.myDate = res.json();
        console.log(this.myDate);
        this.info.id = this.myDate.result.Result.id;
        this.info.cartype_id = this.myDate.result.Result.cartype_id;
        this.info.driver_id = this.myDate.result.Result.driver_id;
        //图片地址只是测试，没有做具体的判断动作
        this.info.picture1 =  this.myDate.result.Result.picture1;
        this.info.picture2 = this.myDate.result.Result.picture2;
        this.info.picture3 = this.myDate.result.Result.picture3;
        this.info.number = this.myDate.result.Result.number;
        this.info.color = this.myDate.result.Result.color;
        this.info.checktime = this.myDate.result.Result.checktime;
      })
  }
  logForm() {
    //表达提交
    // console.log(this.info);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = 'id='+ this.info.id +'&' +
        'cartype_id='+ this.info.cartype_id + '&' +
        'driver_id='+ this.info.driver_id + '&' +
        'picture1='+ this.info.picture1 + '&' +
        'picture2='+ this.info.picture2 + '&' +
        'picture3='+ this.info.picture3 + '&' +
        'number='+ this.info.number + '&' +
        'color='+ this.info.color + '&' +
        'checktime='+ this.info.checktime
      ;

    this.http.post('http://www.shengyoudengwang.com/Service/Car/addCar.html',params,{headers:headers})
      .subscribe( res => alert( res ));
  }
}
