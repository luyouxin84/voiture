/**
 * Created by Administrator on 2016/10/21.
 */
import {Component, Input} from '@angular/core';
import { job } from  '../note/job';
import {Http} from "@angular/http";
import {NavController} from "ionic-angular";
import {note_detail} from "../note_detail/note_detail";

@Component({
  templateUrl:'detail.html',
  selector:'detail-date'
})
export class detaildate{
  @Input() todos:job [];
  constructor(public http:Http,public navCTRL:NavController) {

  }
  gotodetail(){
    this.navCTRL.push(note_detail,{
      //some params
    })
  }
}
