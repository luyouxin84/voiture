import { Component ,OnInit} from '@angular/core';

import { NavController } from 'ionic-angular';
import  { type } from  '../note/datatype';
import { job } from '../note/job'

@Component({
  selector: 'page-about',
  templateUrl: 'note.html'
})
export class NotePage implements OnInit{
  public totalJob:type[] = [];
  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
    let day:job[] = [];
    day.push(new job('title','time','context here'));
    day.push(new job('title1','time','context here2'));
    day.push(new job('title2','time','context here'));
    let day2:job[] = [];
    day2.push(new job('title3','ti5me','context here'));
    day2.push(new job('title4','time','context h3ere'));
    day2.push(new job('title5','t5ime','c4ontext here'));
    day2.push(new job('title6','time','context here'));
    day2.push(new job('title7','time','context here'));
    let day3:job[] = [];
    day3.push(new job('title8','tirme','cont6ext here'));
    day3.push(new job('title9','time','context herye'));
    //初始化真个数据表
    this.totalJob.push(new type('2016年10月21日',day));
    this.totalJob.push(new type('2016年10月22日',day2));
    this.totalJob.push(new type('2016年10月23日',day3));
  }


}
