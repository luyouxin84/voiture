import { Component , OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
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
    })

  }
}
