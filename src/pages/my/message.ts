/**
 * Created by Administrator on 2016/10/18.
 */
import {Component,  OnInit, EventEmitter, Output} from '@angular/core';
import {RootObject, BillList} from '../my/data';
import {Http} from "@angular/http";

@Component({
  selector:'show-message',
  templateUrl:'message.html'
})
export class message implements OnInit{
  data:RootObject;
  list:BillList[]=[];
  @Output() emit:EventEmitter<number> = new EventEmitter();
  @Output() emit_godetail:EventEmitter<string> = new EventEmitter();
  constructor( public http:Http) {

  }
  ngOnInit(){
    this.get_http_data();
  }

  private get_http_data() {
    this.list.splice(0);
    this.http.get('http://www.shengyoudengwang.com/Service/Car/billList.html')
      .subscribe( res =>{
        this.data = res.json();
        // console.log(this.data);
        this.list = this.data.result.BillList;
        console.log(this.list);
        this.emit.emit(this.list.length);
      })

  }
  godetail(){
    this.emit_godetail.emit('xxxx');
  }


}
