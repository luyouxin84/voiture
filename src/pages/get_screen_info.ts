/**
 * Created by Administrator on 2016/10/19.
 */
import { Injectable } from  '@angular/core'
import { screen_info } from  '../pages/screen_info';


@Injectable()
export class Screen{
  getscreen(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let info = new screen_info(width,height);
    return info;
  }
  change_item(  time:number ){
    let i = new Date( time );
    let year :string= i.getFullYear().toString();
    let month :string= (i.getMonth() +1).toString();
    let day :string= i.getDate().toString();
    let date = year + ' 年 '+ month+' 月 ' +day+' 日';
    return date;
  }
}

