/**
 * Created by Administrator on 2016/11/11.
 */
import {Component} from "@angular/core";
import {Headers,Http} from "@angular/http";
import {NavController} from "ionic-angular";
@Component({
  templateUrl:'write_note.html'
})
export  class write_note{
  date:any;
  constructor(public navCTRL:NavController,public http:Http) {
  }
  output(ooo:any){
    console.log(new Date(ooo).getTime())
  }
  post(tit:string , cont:string){
    if ( this.date != null&& tit != null){
      //专制时间
      let dat = new Date( this.date ).getTime();
      let dat_transfert = dat.toString();
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      let params = 'driver_id=1'+'&title='+tit+'&time='+dat_transfert+'&context='+cont;
      this.http.post('http://www.shengyoudengwang.com/Service/Car/memoAdd.html',params,{headers:headers})
        .subscribe( res => {
          console.log(res.json());
          this.navCTRL.pop();
        })
    } else{
      alert('信息不全，不能提交');
    }
  }
}
