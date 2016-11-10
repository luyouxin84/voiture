import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http , Headers} from '@angular/http';
@Component({
  templateUrl:'write_shuoshuo.html',
  selector:'write_shuoshuo'
})
export class write_shuoshuo{
  context:string;
  constructor( public  http:Http,public navCtrl:NavController){

  }
  cancel(){
    this.navCtrl.pop()
  }
  confirm(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var params = 'driver_id='+  '1' +'&'+
        'time='+ new Date().getTime() + '&' +
        'context='+ this.context;

    this.http.post('http://www.shengyoudengwang.com/Service/Car/ssAdd.html',params,{headers:headers})
      .subscribe( res => {
        alert( res );
        this.navCtrl.pop();
      });
  }
}
