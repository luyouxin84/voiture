import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http , Headers} from '@angular/http';
@Component({
  templateUrl:'write_leave.html',
  selector:'write_leave'
})
export class write_leave{
  context:string;
  leavetime:any;
  leaveDate:number;
  constructor( public  http:Http,public navCtrl:NavController){

  }
  cancel(){
    this.navCtrl.pop()
  }
  confirm(){
    // console.log(new Date(this.leavetime).getTime());
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var params = 'driver_id='+  '1' +'&'+
        'leaveDate='+ this.leaveDate.toString() + '&' +
        'time='+ new Date().getTime().toString() + '&' +
        'leavetime='+ new Date(this.leavetime).getTime().toString() + '&' +
        'context='+ this.context;

    this.http.post('http://www.shengyoudengwang.com/Service/Car/leaveAdd.html',params,{headers:headers})
      .subscribe( res => {
        alert( res );
        this.navCtrl.pop();
      });
  }
}
