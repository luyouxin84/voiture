/**
 * Created by Administrator on 2016/10/18.
 */
export class bill{
  public time:string;
  public money:number;
  public restmoney:number;

  constructor(time: string, money: number, restmoney: number) {
    this.time = time;
    this.money = money;
    this.restmoney = restmoney;
  }
}
