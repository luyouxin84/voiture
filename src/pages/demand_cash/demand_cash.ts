import {Component} from "@angular/core";
import { Http ,Headers } from '@angular/http';
import {NavController} from "ionic-angular";
/**
 * Created by 卢友新 on 2016/11/10.
 */
@Component({
  templateUrl:"demand_cash.html",
  selector:"demand_cash"
})
export class demand_cash{

  constructor(public http:Http,public navCTRL:NavController) {
    this.http = http;
  }
  post( number:string,pass:string){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let params = 'Amount='+ number +'&password=' + pass;
    this.http.post('http://www.shengyoudengwang.com/Service/Car/addbill.html',params,{headers:headers})
      .subscribe(res =>
      {
        console.log((res.json()));
        alert(res.json());
        this.navCTRL.pop();
      })
  }
}
