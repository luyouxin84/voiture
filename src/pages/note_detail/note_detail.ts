import {Component} from "@angular/core";
import {Http} from "@angular/http";
import {NavController, NavParams} from "ionic-angular";
@Component({
  templateUrl:'note_detail.html'
})
export class note_detail{

  constructor(public http:Http,public navCTRL:NavController,public navparam:NavParams) {
  }
}
