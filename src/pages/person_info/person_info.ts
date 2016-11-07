import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { RootObject } from '../person_info/data';

@Component({
  templateUrl:"person_info.html",
  selector:"person_info"
})
export  class  person_info implements OnInit{
  recevie_json_data: RootObject;
  info:any = {};
  constructor(public navCTRL: NavController, public http:Http) {
    this.http = http;
  }
  ngOnInit() {
    this.http.get('http://www.shengyoudengwang.com/Service/Car/addDriver.html')
      .subscribe(res => {
        this.recevie_json_data = res.json();
        console.log(this.recevie_json_data);
        this.info.sex = this.recevie_json_data.result.Result.sex;
        this.info.language = this.recevie_json_data.result.Result.language;
        this.info.name = this.recevie_json_data.result.Result.name;
        this.info.getLicenseTime = this.recevie_json_data.result.Result.getLicenseTime;
        this.info.phone = this.recevie_json_data.result.Result.phone;
        this.info.city = this.recevie_json_data.result.Result.city;
        this.info.licenseNumber = this.recevie_json_data.result.Result.licenseNumber;
        this.info.licenseType = this.recevie_json_data.result.Result.licenseType;
        this.info.statue = this.recevie_json_data.result.Result.statue;
        this.info.idCard = this.recevie_json_data.result.Result.idCard;
        this.info.bankCard = this.recevie_json_data.result.Result.bankCard;
        this.info.bankName = this.recevie_json_data.result.Result.bankName;
        this.info.id = this.recevie_json_data.result.Result.id;
    })
  }
  logForm(){
    console.log(this.info);
    // let i = JSON.stringify(this.info);
    // console.log(i);
    // const header = new Headers();
    // header.append('Content-Type','application/json;charset=utf-8');
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //时间没有处理
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

    this.http.post('http://www.shengyoudengwang.com/Service/Car/addDriver.html',params,{headers:headers})
      .subscribe( res => console.log( res ));
  }
}
