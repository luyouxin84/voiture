/**
 * Created by Administrator on 2016/10/22.
 */
export class type{
  title:string;
  begin:string;
  end:string;
  facelink:string;
  time:string;
  telephone:string;
  price:string;
  todo:string;
  constructor(title: string, begin: string, end: string, facelink: string, time: string, telephone: string, price: string, todo: string) {
    this.title = title;
    this.begin = begin;
    this.end = end;
    this.facelink = facelink;
    this.time = time;
    this.telephone = telephone;
    this.price = price;
    this.todo = todo;
  }

}
