import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { leave } from '../leave/leave';
import { shuoshuo } from '../shuoshuo/shuoshuo';
import {add_baoche} from "../add_baoche/add_baoche";
import {http_basic_lib} from "../http_basic_lib";
@Component({
  selector: 'page-other',
  templateUrl: 'other.html'
})
export class OtherPage implements OnInit{
  public TotalMessage:string;
  list:detail[]=[];
  constructor(public navCtrl: NavController,public http:http_basic_lib) {
    this.TotalMessage = "共有 6 条消息";
  }


  ngOnInit(): void {
    this.get_http_data( this.list );
  }

  public get_http_data( t:detail[]) {
    this.http.http_service_post('addressPrice','driver_id=1')
      .subscribe( res =>
      {
        let obj = res;
        //判断数据获取
        if ( obj.code == '200'){
          t.splice(0);
          console.log('获取到包车价格列表');
          console.log(obj.result.List);
          this.TotalMessage = '共有 '+obj.result.List.length.toString()+' 条包车价格';
          for ( let i = 0; i < obj.result.List.length;i++){
            t.push( new detail(obj.result.List[i].startAddress,obj.result.List[i].endAddress,obj.result.List[i].dayPrice
            ,obj.result.List[i].price,obj.result.List[i].id));
          }
        }else{
          console.log( '数据请求错误');
        }
      })
  }
  doRefresh( e:any){
    console.log(e);
    setTimeout(() => {
      console.log('Async operation has ended');
      this.get_http_data( this.list );
      e.complete();
    }, 1000);
  }
  del_item(e:string){
    let params = `id=${e}`;
    this.http.http_service_post('delAddressPrice',params)
      .subscribe( res => alert(res.code),error => alert(error),()=>this.get_http_data( this.list ));
  }

  gotoleave(){
    this.navCtrl.push( leave );
  }
  gotoshuoshuo(){
    this.navCtrl.push(shuoshuo);
  }
  addNew(){
    this.navCtrl.push(add_baoche);
  }

}
export class detail{
  startAddress:string;
  endAddress:string;
  dayPrice:string;
  price:string;
  id:string;

  constructor(startAddress: string, endAddress: string, dayPrice: string, price: string,id:string) {
    this.startAddress = startAddress;
    this.endAddress = endAddress;
    this.dayPrice = dayPrice;
    this.price = price;
    this.id = id;
  }
}
