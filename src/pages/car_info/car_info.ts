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
  car:car_type[]=[];
  constructor( public navCTRL:NavController , public http:http_basic_lib ) {
  }

  ngOnInit(): void {
    let id = localStorage.getItem('driver_id');
    this.http.http_service_get('carType')
      .subscribe(
        res => {
          if ( res.code ==='200'){
            console.log(res.result.Result);
            for(let key in res.result.Result){
              let tmp:car_type={
                value: key,
                type : res.result.Result[key]
              };
              this.car.push(tmp);
            }
            console.log(this.car);
          }else{ alert('没有获得车型信息'+res.message)}
        },
        error => alert('没有获取到车辆信息'+error)
      )
    this.http.http_service_post('driverCar','driver_id='+id)
      .subscribe( res => {
        if ( res.code ==='200') {
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
        }else{
          alert('没有能得到车辆信息'+ res.message);
        }
      },
      error=>{
        console.log(error);
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
      .subscribe( res => alert( res ),error=>alert(error));
  }
  changecar(){
    console.log(this.info.cartype_id)
  }
}

export interface car_type{
  value:string;
  type:string;
}
