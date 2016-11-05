import { Component ,OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
    let result:any;
    this.http.get('http://www.shengyoudengwang.com/Service/Car/addCar.html')
      .subscribe( res => {
        this.myDate = res.json();
        // console.log(this.myDate.result.Result.cartype_id);
        this.info.id = this.myDate.result.Result.id;
        this.info.cartype_id = this.myDate.result.Result.cartype_id;
        this.info.driver_id = this.myDate.result.Result.driver_id;
        this.info.picture1 = this.myDate.result.Result.picture1;
        this.info.picture2 = this.myDate.result.Result.picture2;
        this.info.picture3 = this.myDate.result.Result.picture3;
        this.info.number = this.myDate.result.Result.number;
        this.info.color = this.myDate.result.Result.color;
        this.info.checktime = this.myDate.result.Result.checktime;
      })
  }
  logForm() {
    console.log(this.info)
  }
}
