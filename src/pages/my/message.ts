/**
 * Created by Administrator on 2016/10/18.
 */
import {Component,  OnInit, EventEmitter, Output} from '@angular/core';
import {http_basic_lib} from "../http_basic_lib";

@Component({
  selector:'show-message',
  templateUrl:'message.html'
})
export class message implements OnInit{
  // data:RootObject;
  list:bill_month[]=[];
  @Output() emit:EventEmitter<number> = new EventEmitter();
  @Output() emit_total:EventEmitter<string> = new EventEmitter();
  @Output() emit_godetail:EventEmitter<string> = new EventEmitter();
  constructor( public get_data:http_basic_lib , ) {

  }
  ngOnInit(){
    this.get_http_data();
  }
  private get_http_data() {
    // this.list.splice(0);
    let params = 'driver_id=1';
    this.get_data.http_service_post('billList',params)
      .subscribe( res =>{
        // console.log(res.result);
        for ( let key in res.result){
          if ( key !='length' && key != 'Sum'){
            //匹配正则
            let time_year_test = /[0-9][0-9][0-9][0-9]/;
            let o = key.match(time_year_test);
            let time_month_test = /[0-9][0-9]/g;
            let k = key.match(time_month_test);
            let date = new Date( parseInt(o[0]),parseInt(k[2])-1,1 );
            let date_transf = (date.getTime()/1000).toString();
          let x : bill_month = {
            time:key,
            inTotal:res.result[key].inTotal,
            outTotal:res.result[key].outTotal,
            time_stampe:date_transf
          };
          this.list.push(x);
          }
        }
        this.emit.emit(res.result.length);
        this.emit_total.emit(res.result.Sum);
      })
  }
  godetail(e:any){
    this.emit_godetail.emit( e );
  }
}

export interface bill_month{
  time:string;
  inTotal:string;
  outTotal:string;
  time_stampe:string;
}


