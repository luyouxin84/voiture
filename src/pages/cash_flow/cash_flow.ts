import {Component, OnInit} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {http_basic_lib} from "../http_basic_lib";
@Component({
  templateUrl:'cash_flow.html',
  selector:'cash_flow'
})
export class cash_flow implements OnInit{
  date:string;
  inAmount:string;
  outAmount:string;
  resultAmount:string;
  list:cash_flow_single[]=[];
  title_month:string;
  income = {
    'color':'green',
    'font-weight':'600'
  };
  outcome = {
    'color':'red',
    'font-weight':'600'
  };
  ngOnInit(): void {
    this.title_month = (new Date(parseInt(this.date)*1000).getMonth()+1).toString();
    let params:string = `month=${this.date}&driver_id=1`;
    this.http.http_service_post('billDetail',params)
      .subscribe(
        res =>{
          if (res.code ==='200'){
            // console.log(res);
            this.inAmount = res.result.inAmount;
            this.outAmount = res.result.outAmount;
            this.resultAmount = res.result.resultAmount;
            let tlist = res.result.Bill;
            console.log(tlist);
            for (let i of tlist){
              // console.log(i);
              let k = new Date(parseInt(i.billtime)*1000);
              let temp:cash_flow_single = {
                Amount:i.Amount,
                billtime: k.getFullYear().toString()+'年'+(k.getMonth()+1).toString()+'月'+(k.getDate()).toString()+'日'+
                k.getHours().toString()+':'+ k.getMinutes().toString(),
                isAdd:i.isAdd
              };
              this.list.push(temp);
            }
          }else{
            alert('未能获取数据');
          }
        }
      )
  }
  constructor(public navCtrl:NavController,public navParam:NavParams,public http:http_basic_lib) {
    this.date = this.navParam.get('month');
    console.log(this.date);
  }
}

export interface cash_flow_single{
  Amount:string;
  billtime:string;
  isAdd:string;
}
