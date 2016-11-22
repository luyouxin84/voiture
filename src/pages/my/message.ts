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
        console.log(res.result);
        for ( let key in res.result){
          if ( key !='length' && key != 'Sum'){
          console.log(key);
          console.log(res.result[key][0]);
          let x = res.result[key][0];
          this.list.push(new bill_month(key,x.Amount,x.billtime,x.balance));
          }
        }
        console.log(this.list);
        this.emit.emit(res.result.length);
        this.emit_total.emit(res.result.Sum);
      })
  }
  godetail(e:any){
    this.emit_godetail.emit( e );
  }
}

export class bill_month{
  time:string;
  balance:string;
  Amount:string;
  billtime:string;
  constructor(time: string,Amount: string,billtime:string,balance?: string) {
    this.time = time;
    this.balance = balance;
    this.Amount = Amount;
    this.billtime = billtime;
  }
}


