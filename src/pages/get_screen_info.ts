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
}

