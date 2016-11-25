/**
 * Created by Administrator on 2016/11/11.
 */
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {http_basic_lib} from "../http_basic_lib";
@Component({
  templateUrl:'write_note.html'
})
export  class write_note{
  date:any;
  constructor(public navCTRL:NavController,public http:http_basic_lib) {
  }
  output(ooo:any){
    console.log(new Date(ooo).getTime())
  }
  post(tit:string , cont:string){
    if ( this.date != null&& tit != null){
      //转制时间
      let dat = new Date( this.date ).getTime();
      //转换时区
      dat = (dat/1000)-28800;
      let params = 'driver_id=1'+'&title='+tit+'&memo_date='+ dat.toString() +'&context='+cont;
      this.http.http_service_post('memoAdd',params)
        .subscribe( res => {
          console.log(res);
          this.navCTRL.pop();
        })
    } else{
      alert('信息不全，不能提交');
    }
  }
}
