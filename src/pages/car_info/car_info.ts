import { Component ,OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {http_basic_lib} from "../http_basic_lib";

@Component({
  templateUrl:"car_info.html",
  selector:"car_info"
})
export  class  car_info implements OnInit {
  //mydata为获取的数据，info为操作的空对象
  info :any= {} ;
  constructor( public navCTRL:NavController , public http:http_basic_lib ) {
  }

  ngOnInit(): void {
    let id = localStorage.getItem('driver_id');
    this.http.http_service_post('driverCar','driver_id='+id)
      .subscribe( res => {
        console.log(res);
        let data = res.result.Result[0];
        this.info.id = data.id;
        this.info.cartype_id = data.cartype_id;
        this.info.driver_id = data.driver_id;
        //图片地址只是测试，没有做具体的判断动作
        this.info.picture1 =  data.picture1;
        this.info.picture2 = data.picture2;
        this.info.picture3 = data.picture3;
        this.info.number = data.number;
        this.info.color = data.color;
        this.info.checktime = data.checktime;
      })
  }
  logForm() {
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

    this.http.http_service_post('addCar',params)
      .subscribe( res => alert( res ));
  }
}
