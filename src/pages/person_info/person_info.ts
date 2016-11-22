import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {http_basic_lib} from "../http_basic_lib";

@Component({
  templateUrl:"person_info.html",
  selector:"person_info"
})
export  class  person_info implements OnInit{
  info:any = {};
  constructor(public navCTRL: NavController, public http:http_basic_lib) {
  }
  ngOnInit() {
    //获取用户driver_id
    let id = localStorage.getItem('driver_id');
    this.http.http_service_post('driverDetail','driver_id='+id )
      .subscribe(res => {
        if( res.code === '200'){
          let date = res.result.Result[0];
          console.log( date );
          this.info.sex = date.sex;
          this.info.language = date.language;
          this.info.name = date.name;
          this.info.getLicenseTime = date.getLicenseTime;
          this.info.phone = date.phone;
          this.info.city = date.city;
          this.info.licenseNumber = date.licenseNumber;
          this.info.licenseType = date.licenseType;
          this.info.statue = date.statue;
          this.info.idCard = date.idCard;
          this.info.bankCard = date.bankCard;
          this.info.bankName = date.bankName;
          this.info.id = date.id;
        }else{
          alert('没能获取用户数据'+ res.code + res.message);
        }
    })
  }
  logForm(){
    //时间没有处理,数据有效性没有验证，
    var params = 'name='+ this.info.name +'&' +
      'sex='+ this.info.sex + '&' +
      'language='+ this.info.language + '&' +
      'getLicenseTime='+ this.info.getLicenseTime + '&' +
      'phone='+ this.info.phone + '&' +
      'city='+ this.info.city + '&' +
      'licenseNumber='+ this.info.licenseNumber + '&' +
      'licenseType='+ this.info.licenseType + '&' +
      'statue='+ this.info.statue + '&' +
      'idCard='+ this.info.idCard + '&' +
      'bankCard='+ this.info.bankCard + '&' +
      'bankName='+ this.info.bankName + '&' +
      'id='+ this.info.id
      ;
    this.http.http_service_post('http://www.shengyoudengwang.com/Service/Car/addDriver.html',params)
      .subscribe( res => console.log( res ));
  }
}
